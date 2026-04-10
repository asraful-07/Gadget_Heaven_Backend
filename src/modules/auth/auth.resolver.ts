import { signupService, signinService } from "./auth.service.js";
import { SignupInput, SigninInput } from "./auth.interface.js";

export const authResolver = {
  Mutation: {
    signup: (_: unknown, args: SignupInput) => signupService(args),
    signin: (_: unknown, args: SigninInput) => signinService(args),
  },
};
