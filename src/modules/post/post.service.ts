import { prisma } from "../../lib/prisma.js";

interface CreatePostInput {
  title: string;
  content: string;
  authorId: string;
}

export const getPostsService = async () => {
  return prisma.post.findMany({
    include: {
      author: true,
      comments: true,
    },
  });
};

export const createPostService = async (data: CreatePostInput) => {
  return prisma.post.create({
    data: {
      title: data.title,
      content: data.content,

      // default fields
      status: "DRAFT",
      tags: [],
      views: 0,
      //
      // relation fix
      author: {
        connect: {
          id: data.authorId,
        },
      },
    },

    include: {
      author: true,
      comments: true,
    },
  });
};
