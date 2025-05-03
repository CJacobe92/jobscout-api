export const authTypes = `#graphql

type Auth{
  email: String
  password: String
}

type Response{
  id: ID!,
  accessToken: String!
}

input SigninInput{
  email: String!
  password: String!
}

type Mutation{
  signin(credentials: SigninInput!):Response!
}

`