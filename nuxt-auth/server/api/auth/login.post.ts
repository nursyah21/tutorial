// @ts-ignore
import { user } from "~/schema/user";
import { jwtSign } from "~/utils/jwt";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { email, password } = await readBody(event);

  const userExists = await user.findOne({ email: email });
  if (!userExists) {
    throw createError({
      statusCode: 500,
      statusMessage: "User not exists",
    });
  }

  const isValid = isValidPassword(password, userExists.password);
  if (!isValid) {
    throw createError({
      statusCode: 400,
      statusMessage: "User or Password incorrect",
    });
  }

  return jwtSign(userExists.id);
});
