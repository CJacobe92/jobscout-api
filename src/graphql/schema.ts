import { createSchema } from "graphql-yoga"
import { userType } from "./features/user/user.type.js"
import { userMutations } from "./features/user/user.mutations.js"
import { userQueries } from "./features/user/user.queries.js"

const typeDefs = `#graphql
  ${userType}
`
const resolvers = {
  Mutation: {
    ...userMutations.Mutation
  },
  Query: {
    ...userQueries.Query
  }
}

export const schema = createSchema({
  typeDefs,
  resolvers
})