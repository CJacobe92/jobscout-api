import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { GraphQLContext } from "../../../../context/index.js";
import { UnauthorizedException } from "../../../exceptions/unauthorized.exception.js";

export const getAllUsers = GlobalErrorHandler(
  async(_parent: any, args: { }, context: GraphQLContext) => {
    
    if(context.currentUser?.role === 'ADMIN'){
      return await context.prisma.user.findMany();
    } else{
      throw new UnauthorizedException("UNAUTHORIZED_ACCESS", {
        message: "Accessing an unauthorized resource"
      })
    }
  }
)