export const typeDefs = `#graphql
  type Query {
    me: User
    user: [User]
    posts: [Post]
  }

  type AuthPayload {
    token: String!
}

  type Mutation {
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

  type Mutation {
    createPost(
      title: String!
      content: String!
    ): Post
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    status: String!
    tags: [String!]!
    views: Int!
    author: User!
    comments: [Comment!]!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
  id: ID!
  content: String!
  author: User!
  post: Post!
  parent: Comment
  createdAt: String!
  updatedAt: String!
  }

  type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]
  comments: [Comment!]
  createdAt: String!
  updatedAt: String!
  }
`;
