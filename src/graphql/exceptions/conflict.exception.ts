import { BaseException } from "./base.exception.js";

export class ConflictException extends BaseException{
  constructor(message: string, details?: Record<string, any>){
    super(message, {
      code: "CONFLICT_ERROR",
      statusCode: 409,
      details,
    })
  }
}