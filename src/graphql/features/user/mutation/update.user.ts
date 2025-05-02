import { z } from "zod";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { userIdValidation, userInputValidation } from "../user.validations.js";
import { GraphQLContext } from "../../../context.js";

export const updateUser = GlobalErrorHandler(
  async(_parent: any, args: { id: z.infer<typeof userIdValidation>, input: z.infer<typeof userInputValidation> }, context: GraphQLContext) => {
    const inputValidation = userInputValidation.partial().safeParse(args.input);
    const idValidation = userIdValidation.safeParse({id: args.id});

    if (!inputValidation.success) throw inputValidation.error;
    if (!idValidation.success) throw idValidation.error;
    
    const updatedUser = await context.prisma.user.update({
      where: { id: idValidation.data?.id },
      data: { ...inputValidation.data }
    });

    return !!updatedUser;
  }
)