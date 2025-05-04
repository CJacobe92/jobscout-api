import { GraphQLContext } from "../../../../context/index.js";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { userIdValidation } from "../user.validations.js";

export const getUser = GlobalErrorHandler(
  async(_parent: any, args: { id: string }, context: GraphQLContext) => {
    const validateUserId = userIdValidation.safeParse({id: args.id});

    if (!validateUserId.success) throw validateUserId.error;
    
    const user = await context.prisma.user.findUniqueOrThrow({
      where: { id: validateUserId.data.id }
    });

    return user;
  }
)