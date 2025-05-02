import { GraphQLContext } from "../../context.js"
import { getAllUsers } from "./query/get.all.users.js"
import { getUser } from "./query/get.user.js"

export const userQueries = {
  Query:{
    getAllUsers,
    getUser
  }
}