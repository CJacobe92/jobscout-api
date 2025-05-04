export const authTypes = `#graphql

enum RoleEnum{
  ADMIN
  MANAGEMENT
  PROCESSING
  RECRUITMENT
}

type Auth{
  email: String
  password: String
}

type AuthPayload{
  id: ID!,
  role: RoleEnum!
  accessToken: String!
}

input SigninInput{
  email: String!
  password: String!
}

type Mutation{
  signin(credentials: SigninInput!):AuthPayload
}

`