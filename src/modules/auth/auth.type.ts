export const authType = `#graphql
  type AuthPayload {
    token: String!
  }

  extend type Mutation {
    signup(
      name: String!
      email: String!
      password: String!
    ): AuthPayload!

    signin(
      email: String!
      password: String!
    ): AuthPayload!
  }
`;
