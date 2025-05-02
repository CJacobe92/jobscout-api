import { GraphQLError } from "graphql";

export class BaseException extends GraphQLError {
  code: string;
  statusCode: number;
  details?: Record<string, any>;

  constructor(
    message: string,
    { code, statusCode, details }: { code: string; statusCode: number; details?: Record<string, any> }
  ) {

    super(message, {
      extensions: {
        code,
        statusCode,
        details
      }
    });

    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}
