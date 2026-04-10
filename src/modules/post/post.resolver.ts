import { createPostService, getPostsService } from "./post.service.js";

export const postResolver = {
  Query: {
    posts: () => getPostsService(),
  },

  Mutation: {
    createPost: (
      _: unknown,
      args: { title: string; content: string },
      context: any,
    ) => {
      return createPostService({
        title: args.title,
        content: args.content,
        authorId: context.userId,
      });
    },
  },
};
