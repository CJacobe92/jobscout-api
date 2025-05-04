import { z } from "zod";

import { userInputValidation } from "../user.validations.js";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { hashSync } from "bcrypt";
import { GraphQLContext } from "../../../../context/index.js";

export const createUser = GlobalErrorHandler(
  async (_parent: any, args: { input: z.infer<typeof userInputValidation> }, context: GraphQLContext) => {
    const validation = userInputValidation.safeParse(args.input);

    if (!validation.success) throw validation.error;

    return await context.prisma.user.create({
      data: { ...validation.data, password: hashSync(validation.data.password, 10) }
    });
  }
)
