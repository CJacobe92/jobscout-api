import { YogaInitialContext } from "graphql-yoga"
import { User } from "../generated/prisma/index.js"
import { authenticate } from "./auth.context.js"
import { prisma } from "../index.js"

export type GraphQLContext = {
  prisma: typeof prisma
  currentUser: User | null
}

export const createContext = async(initialContext: YogaInitialContext):Promise<GraphQLContext> => {
  const currentUser = await authenticate(initialContext)
  return {
    prisma: prisma,
    currentUser: currentUser
  }
}