import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SignupInput, SigninInput } from "./auth.interface.js";
import { prisma } from "../../lib/prisma.js";

export const signupService = async (payload: SignupInput) => {
  const hashedPassword = await bcrypt.hash(payload.password, 12);

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    },
  });

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  return { token };
};

export const signinService = async (payload: SigninInput) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(payload.password, user.password);
  if (!valid) throw new Error("Invalid password");

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  return { token };
};
