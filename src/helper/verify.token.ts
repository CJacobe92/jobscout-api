import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthPayload } from "../graphql/features/auth/authenticate.user.js";

type RoleEnum = 'ADMIN' | 'MANAGEMENT' | 'PROCESSING' | 'RECRUITMENT';



export const verifyToken = (token: string): AuthPayload | null => {
  try {
    const SECRET = process.env.ACCESS_TOKEN_PUB_KEY?.replace(/\\n/g, '\n') || '';
    const algorithm: jwt.Algorithm = 'RS256';

    if (token) {
      const decoded = jwt.verify(token, SECRET, { algorithms: [algorithm] }) as AuthPayload
      return decoded
    }
    return null;
  } catch (error: unknown) {
    console.error('JWT Verification Error:', error);
    return null;
  }
};