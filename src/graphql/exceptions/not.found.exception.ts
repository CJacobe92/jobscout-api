import { BaseException } from "./base.exception.js";

export class NotFoundException extends BaseException{
  constructor(message: string, details?: Record<string, any>){
    super(message, {
      code: "NOT_FOUND",
      statusCode: 404,
      details,
    })
  }
}