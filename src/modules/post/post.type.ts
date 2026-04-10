export const postType = `#graphql
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

  extend type Query {
    posts: [Post]
  }

  extend type Mutation {
    createPost(
      title: String!
      content: String!
    ): Post
  }
`;
