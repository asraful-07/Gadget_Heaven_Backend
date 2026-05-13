import {
  getCommentsService,
  getCommentsByPostService,
  createCommentService,
} from "./comment.service.js";

export const commentResolver = {
  Query: {
    comments: () => getCommentsService(),

    commentsByPost: (_: unknown, args: { postId: string }) => {
      return getCommentsByPostService(args.postId);
    },
  },

  Mutation: {
    createComment: (
      _: unknown,
      args: { postId: string; content: string },
      context: any,
    ) => {
      return createCommentService({
        postId: args.postId,
        content: args.content,
        authorId: context.userId,
      });
    },
  },
};
