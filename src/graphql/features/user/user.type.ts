export const userType = `#graphql

enum RoleEnum{
  ADMIN
  MANAGEMENT
  PROCESSING
  RECRUITMENT
}

type User{
  id: ID
  firstname: String
  lastname: String
  email: String
  role: RoleEnum
}

input CreateUserInput{
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  role: RoleEnum!
}

input UpdateUserInput{
  firstname: String
  lastname: String
  email: String
  password: String
  role: RoleEnum
}

type Query{
  getAllUsers: [User]!
  getUser(id: ID!):User!
}

type Mutation{
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): Boolean!
  deleteUser(id: ID!):Boolean!
}

`