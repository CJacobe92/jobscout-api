import { BaseException } from "./base.exception.js";

export class UnauthorizedException extends BaseException{
  constructor(message: string, details?: Record<string, any>){
    super(message, {
      code: "UNAUTHORIZED",
      statusCode: 401,
      details,
    })
  }
}