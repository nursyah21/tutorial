import { user } from "~/schema/user";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { email, password } = await readBody(event);

  const userExists = await user.findOne({ email: email });
  if (userExists) {
    
    throw createError({
      statusCode: 500,
      statusMessage:"Email already exists"
    });
  }

  await user.create({ email, password: createHash(password), nama: '', test:'asd' });

  return { message: "success create account" };
});
