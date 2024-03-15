// @ts-ignore
import jwt from 'jsonwebtoken'
import { user } from "~/schema/user";
import { jwtVerify } from '~/utils/jwt';
// import { jwtSign, jwtVerify } from "~/utils/jwt";

export default defineEventHandler(async (event) => {
  const {token} = await readBody(event);
  try {
    const data =  jwtVerify(token)
    if(data){
      return user.findById(data.id).select({password: false})
    }
  } catch (error) {
    console.error(error)
  }

  return {  };
});
