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

  let encpassword = createHash(password);

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    throw createError({
      status: 400,
      message:"User already exists"
    });
  }
  const data = {
    email: email,
    password: encpassword,
  };
  const user = await User.create(data);

  const sign = jwt.sign({ id: user.id }, config.apiSecret, {
    expiresIn: "14d",
  });

  return { success: sign };
});
