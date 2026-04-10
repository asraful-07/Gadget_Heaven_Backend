import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface userInfo {
  name: string;
  email: string;
  password: string;
}

export const resolvers = {
  Query: {
    me: async (parent: any, args: any, context: any) => {
      return await prisma.user.findUnique({
        where: {
          id: "1",
        },
      });
    },

    user: async (parent: any, args: any, context: any) => {
      return await prisma.user.findMany();
    },
  },

  Mutation: {
    signup: async (parent: any, args: userInfo, context: any) => {
      const hashedPassword = await bcrypt.hash(args.password, 12);
      args.password = hashedPassword;

      const createUser = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });

      const token = jwt.sign(
        { userId: createUser.id },
        "dane35fo124235you34secret3fr3key",
        {
          expiresIn: "1d",
        },
      );
      return {
        token,
        createUser,
      };
    },

    signin: async (parent: any, args: userInfo, context: any) => {
      const user = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });

      if (!user) {
        throw new Error("No such user found");
      }

      const currantPassword = await bcrypt.compare(
        args.password,
        user.password,
      );

      if (!currantPassword) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign(
        { userId: user.id, name: user.name, email: user.email },
        "dane35fo124235you34secret3fr3key",
        {
          expiresIn: "1d",
        },
      );
      return {
        token,
        user,
      };
    },
    
  },
};
