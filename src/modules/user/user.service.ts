import { prisma } from "../../lib/prisma.js";

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const getMe = async (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
