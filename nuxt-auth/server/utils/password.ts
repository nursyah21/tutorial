import crypto from "crypto";

const config = useRuntimeConfig();

function createHash(password: string) {
  let encpassword = (password + config.secretAuth).split("").join("$");

  encpassword = crypto.createHash("sha384").update(encpassword).digest(
    "base64",
  );

  return encpassword;
}

function isValidPassword(password: string, passwordHash: string) {
  return createHash(password) === passwordHash;
}


export { createHash, isValidPassword };
