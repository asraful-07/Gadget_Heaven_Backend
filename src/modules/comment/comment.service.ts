import { prisma } from "../../lib/prisma.js";

interface CreateCommentInput {
  postId: string;
  content: string;
  authorId: string;
}

// 🔥 Get all comments
export const getCommentsService = async () => {
  return prisma.comment.findMany({
    include: {
      author: true,
      post: true,
    },
  });
};

// 🔥 Get comments by post
export const getCommentsByPostService = async (postId: string) => {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      author: true,
      post: true,
    },
  });
};

// 🔥 Create comment
export const createCommentService = async (data: CreateCommentInput) => {
  return prisma.comment.create({
    data: {
      content: data.content,

      post: {
        connect: {
          id: data.postId,
        },
      },

      author: {
        connect: {
          id: data.authorId,
        },
      },
    },

    include: {
      author: true,
      post: true,
    },
  });
};
