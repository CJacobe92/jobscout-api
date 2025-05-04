import { PrismaClient, User } from "../../../generated/prisma/index.js";
import jwt, { JwtPayload } from "jsonwebtoken"

export const ACCESS_TOKEN_PRV_KEY = process.env.ACCESS_TOKEN_PRV_KEY!
export const ACCESS_TOKEN_PUB_KEY = process.env.ACCESS_TOKEN_PUB_KEY!

type Role = "ADMIN" | "MANAGEMENT" |"PROCESSING"| "RECRUITMENT"

export interface AuthPayload extends JwtPayload{
  id?: string | null
  role?: Role
}

export const authenticateUser = async(
  prisma: PrismaClient, 
  req: Request
):Promise<User | null> => {
  const header = req.headers.get('authorization');

  if(header !== null){
    const token = header?.split(' ')[1]
    const tokenPayload = jwt.verify(token, ACCESS_TOKEN_PUB_KEY) as AuthPayload
    const userId = tokenPayload.id
    return userId ? await prisma.user.findUnique({ where: { id: userId } }) : null;
  }

  return null;
}