import { authResolver } from "../modules/auth/auth.resolver.js";
import { userResolver } from "../modules/user/user.resolver.js";
import { postResolver } from "../modules/post/post.resolver.js";
import { commentResolver } from "../modules/comment/comment.resolver.js";

export const resolvers = [
  authResolver,
  userResolver,
  postResolver,
  commentResolver,
];
