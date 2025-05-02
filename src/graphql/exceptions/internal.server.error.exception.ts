import { BaseException } from "./base.exception.js";

export class InternalServerErrorException extends BaseException{
  constructor(message: string, details?: Record<string, any>){
    super(message, {
      code: "INTERNAL SERVER ERROR",
      statusCode: 500,
      details,
    })
  }
}