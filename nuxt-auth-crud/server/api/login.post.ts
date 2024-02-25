import { useValidatedBody, z } from "h3-zod";
import { createHash, isValidPassword } from "~/utils/password";
import { User } from "~/utils/schema/user";
// @ts-ignore
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { email, password } = await useValidatedBody(event, {
    email: z.string().email(),
    password: z.string().min(8),
  });


  const userExists = await User.findOne({ email: email });
  if (!userExists) {
    throw createError({
      status: 400,
      message:"User not exists"
    });
  }
  const isValid = isValidPassword(password, userExists.password)
  if(!isValid){
    throw createError({
      status: 400,
      message:"User or Password incorrect",
    });
  }

  const sign = jwt.sign({ id: userExists.id }, config.apiSecret, {
    expiresIn: "14d",
  });

  return sign;
});
