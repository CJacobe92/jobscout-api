import { GraphQLError } from "graphql";
import { InternalServerErrorException } from "./internal.server.error.exception.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/runtime/library.js";
import { BadRequestException } from "./bad.request.exception.js";
import { ZodError } from "zod";
import { ConflictException } from "./conflict.exception.js";
import { NotFoundException } from "./not.found.exception.js";

export const GlobalErrorHandler = 
  <T extends any[], R extends unknown>(fn: (...args: T) => Promise<R> ) => 
    async(...args: T): Promise<R | unknown> => {

      try { 
        return await fn(...args); 
      } 

      catch (error: unknown) {
      
        if (error instanceof GraphQLError) {
          throw error;
        }

        if (error instanceof ZodError) {
          const formattedErrors = error.errors.map(({ path, message }) => ({
            field: path.join('.'),
            message
          }));

          throw new GraphQLError("Validation failed", {
            extensions: {
              code: "ZOD_VALIDATION_ERROR",
              errors: formattedErrors
            }
          });
        }

        if (error instanceof PrismaClientKnownRequestError) {
          switch (error.code) {
            case 'P2002':
              const targetField = Array.isArray(error.meta?.target) ? error.meta.target[0] : null;
              if (targetField === 'email') {
                throw new ConflictException('Email is already in use', { target: targetField });
              }
              // Add handling for other unique constraints if needed
              throw new ConflictException('Unique constraint violation', {
                code: error.code,
                meta: error.meta,
              });
            case 'P2003':
              // Foreign key constraint failed
              const fieldName = error.meta?.field_name as string | undefined;
              throw new BadRequestException(
                `Invalid value provided for ${fieldName || 'related record'}`,
                { code: error.code, meta: error.meta },
              );
            case 'P2025':
              // Record not found
              throw new NotFoundException('Record not found', {
                code: error.code,
                meta: error.meta,
              });
            case 'P2000':
              // Value too long for the field
              const maxLengthField = error.meta?.fieldName as string | undefined;
              const maxLength = error.meta?.maxLength as number | undefined;
              throw new BadRequestException(
                `${maxLengthField || 'Value'} is too long (maximum length: ${maxLength || 'unknown'})`,
                { code: error.code, meta: error.meta },
              );
            case 'P2001':
              // The record searched for in a where condition is required but not found
              throw new NotFoundException('Record not found', {
                code: error.code,
                meta: error.meta,
              });
            case 'P2007':
              // Data validation error
              throw new BadRequestException('Invalid data provided', {
                code: error.code,
                meta: error.meta,
              });
            case 'P2008':
              // Failed to parse the query
              throw new BadRequestException('Invalid query', {
                code: error.code,
                meta: error.meta,
              });
            case 'P2011':
              // Null constraint violation
              const nullField = error.meta?.constraint as string | undefined;
              throw new BadRequestException(`${nullField || 'Required field'} cannot be null`, {
                code: error.code,
                meta: error.meta,
              });
            case 'P2012':
              // Missing a required value
              const missingField = Array.isArray(error.meta?.target) ? error.meta.target[0] : null;
              throw new BadRequestException(`${missingField || 'Required value'} is missing`, {
                code: error.code,
                meta: error.meta,
              });
            // Add more cases for other common Prisma error codes as needed
            default:
              // Handle other Prisma errors or re-throw the original error
              console.error('Unhandled Prisma error:', error);
              throw error;
          }
        }
        

        throw new InternalServerErrorException(
          "An unexpected error occurred", 
          { 
            message: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined
          }
        );
      }
  }
