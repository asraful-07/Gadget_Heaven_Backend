// /graphql/typeDefs.ts

import { authType } from "../modules/auth/auth.type.js";
import { postType } from "../modules/post/post.type.js";
import { userType } from "../modules/user/user.type.js";

export const typeDefs = [
  `#graphql
    type Query {
      _empty: String
    }

    type Mutation {
      _empty: String
    }
  `,
  authType,
  userType,
  postType,
];
