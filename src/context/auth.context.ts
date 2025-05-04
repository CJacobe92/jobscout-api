import { YogaInitialContext } from "graphql-yoga";
import { User } from "../generated/prisma/index.js";
import { verifyToken } from "../helper/verify.token.js";
import { prisma } from "../index.js";


declare global{
  namespace Express{
    interface Request{
      user?: User | null
    }
  }
}

export const authenticate = async(
  initialContext: YogaInitialContext,
): Promise<User | null>  =>{
  const req = initialContext.request
  let currentUser: User | null =  null;

  const token = req.headers?.get('authorization')?.split(' ')[1]


  if(token){
    const payload = verifyToken(token);
    if(payload?.id){
      const user = await prisma.user.findUnique({where: {id: payload.id}})
      currentUser = user
     
    }
  }

  return currentUser
}