import { authResolver } from "../modules/auth/auth.resolver.js";
import { userResolver } from "../modules/user/user.resolver.js";
import { postResolver } from "../modules/post/post.resolver.js";

export const resolvers = [authResolver, userResolver, postResolver];
