import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const context = async ({ req }: any) => {
  const token = req.headers.authorization || "";

  let userId = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, "SECRET_KEY") as any;
      userId = decoded.id;
    } catch (err) {
      userId = null;
    }
  }

  return {
    prisma,
    userId,
  };
};
