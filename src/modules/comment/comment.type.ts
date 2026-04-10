type Comment {
  id: ID!
  content: String!
  createdAt: String!
  post: Post!
  author: User!
}
// src/modules/comment/comment.type.ts
type Query {
  comments: [Comment!]!
  commentsByPost(postId: ID!): [Comment!]!
}

type Mutation {
  createComment(postId: ID!, content: String!): Comment!
}