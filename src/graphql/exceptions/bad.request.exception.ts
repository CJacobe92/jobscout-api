import { BaseException } from "./base.exception.js";

export class BadRequestException extends BaseException{
  constructor(message: string, details?: Record<string, any>){
    super(message, {
      code: "BAD_REQUEST",
      statusCode: 400,
      details,
    })
  }
}