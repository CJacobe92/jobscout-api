import { z } from "zod";
import { compareSync } from "bcrypt";
import { GraphQLContext } from "../../../context.js";
import { GlobalErrorHandler } from "../../../exceptions/global.error.handler.js";
import { AuthInputValidation } from "../auth.validations.js";
import jwt from "jsonwebtoken";
import { UnauthorizedException } from "../../../exceptions/unauthorized.exception.js";


export const signin = GlobalErrorHandler(
  async(_parent: any, args: { credentials: z.infer<typeof AuthInputValidation> }, context: GraphQLContext) => {
      const inputValidation = AuthInputValidation.safeParse(args.credentials);

      if(!inputValidation.success) throw inputValidation.error

      const user = await context.prisma.user.findUniqueOrThrow({
        where: {email: inputValidation.data.email}
      })

      const passwordMatch = compareSync(inputValidation.data.password, user.password);
      if (!passwordMatch) {
        throw new UnauthorizedException("Failed to verify credentials", {
          cause: "Incorrect email or password",
        });
      }
      
      const secret = process.env.ACCESS_TOKEN_PRV_KEY!;
      const token = jwt.sign({ id: user.id }, secret, {
        algorithm: 'RS256',
        expiresIn: '24h',
        issuer: 'jobscout-api',
      });
  
      return { id: user.id, accessToken: token };
  }
)