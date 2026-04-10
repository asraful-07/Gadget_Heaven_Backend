export const userType = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  extend type Query {
    me: User
    users: [User]
  }
`;
