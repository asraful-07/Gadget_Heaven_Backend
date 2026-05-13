export const commentType = `#graphql
  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    comments: [Comment!]!
    commentsByPost(postId: ID!): [Comment!]!
  }

  extend type Mutation {
    createComment(postId: ID!, content: String!): Comment!
  }
`;
