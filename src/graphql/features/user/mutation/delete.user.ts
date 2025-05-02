import { z } from "zod";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { userIdValidation } from "../user.validations.js";
import { GraphQLContext } from "../../../context.js";

export const deleteUser = GlobalErrorHandler(
  async(_parent: any, args: { id: z.infer<typeof userIdValidation> }, context: GraphQLContext) => {
    const idValidation = userIdValidation.safeParse({id: args.id});

    if (!idValidation.success) throw idValidation.error;
    
    const deletedUser = await context.prisma.user.delete({
      where: { id: idValidation.data.id }
    });

    return !!deletedUser;
  }
)