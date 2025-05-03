import { createSchema } from "graphql-yoga"
import { userTypes } from "./features/user/user.types.js"
import { userMutations } from "./features/user/user.mutations.js"
import { userQueries } from "./features/user/user.queries.js"
import { authMutations } from "./features/auth/auth.mutation.js"
import { authTypes } from "./features/auth/auth.types.js"

const typeDefs = `#graphql
  ${userTypes}
  ${authTypes}
`
const resolvers = {
  Mutation: {
    ...userMutations.Mutation,
    ...authMutations.Mutation,
  },
  Query: {
    ...userQueries.Query
  }
}

export const schema = createSchema({
  typeDefs,
  resolvers
})