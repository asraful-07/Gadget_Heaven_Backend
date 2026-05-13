import { prisma } from "../../lib/prisma.js";

interface CreatePostInput {
  title: string;
  content: string;
  authorId: string;
}

export const getPostsService = async () => {
  return prisma.post.findMany({
    include: {
      authors: true,
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
      authors: {
        connect: {
          id: data.authorId,
        },
      },
    },

    include: {
      authors: true,
      comments: true,
    },
  });
};
