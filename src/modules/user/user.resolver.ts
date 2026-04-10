import { getUsers, getMe } from "./user.service.js";
import { Context } from "../../types/context.js";

export const userResolver = {
  Query: {
    users: () => getUsers(),
    me: (_: unknown, __: unknown, context: Context) => {
      if (!context.userId) throw new Error("Unauthorized");
      return getMe(context.userId);
    },
  },
};
