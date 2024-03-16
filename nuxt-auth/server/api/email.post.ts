// @ts-ignore
import { user } from "~/schema/user";
import { jwtVerify } from "~/utils/jwt";
// import { jwtSign, jwtVerify } from "~/utils/jwt";

export default defineEventHandler(async (event) => {
  const { email, name } = await readBody(event);
  const res = await $fetch("https://api.brevo.com/v3/smtp/email", {
    method: "post",
    body: {
      name: "Campaign sent via the API",
      subject: "My subject",
      sender: {
        name: "nuxt-auth",
        email: "hi@nuxt-auth.com",
      },
      to: [
        {
          "email": email,
          "name": name,
        },
      ],
      htmlContent:
        "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>",
    },
    headers: {
      'api-key': useRuntimeConfig().brevoKeys,
      
    },
  })

  return res;
});
