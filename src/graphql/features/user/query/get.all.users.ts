import { z } from "zod";
import { GraphQLContext } from "../../../context.js";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";

export const getAllUsers = GlobalErrorHandler(
  async(_parent: any, args: { }, context: GraphQLContext) => {
    
    const user = await context.prisma.user.findMany()

    return user;
  }
)