// @ts-ignore
// import { user } from "~/schema/user";
// import { jwtVerify } from '~/utils/jwt';
// import { jwtSign, jwtVerify } from "~/utils/jwt";
import Ably from "ably/promises";

export default defineEventHandler(async (event) => {
  console.log('aby',useRuntimeConfig().public.ablyKey);
//   const ably = new Ably.Realtime.Promise(
//     useRuntimeConfig().public.ablyKey,
//   );
//   ably.connection.once("connected", () => {
//     console.log("Connected to Ably!");
//   });

  //   const {token} = await readBody(event);
  //   try {
  //     const data =  jwtVerify(token)
  //     if(data){
  //       return user.findById(data.id).select({password: false})
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }

  return {};
});
