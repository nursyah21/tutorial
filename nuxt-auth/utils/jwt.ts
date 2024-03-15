// @ts-ignore
import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

function jwtSign(id: any) {
  return jwt.sign({ id: id }, config.secretAuth, {
    expiresIn: "14d",
  });
}

function jwtVerify(id: any) {    
  return jwt.verify(id, config.secretAuth)
}

export { jwtSign, jwtVerify };
