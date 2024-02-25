import crypto from "crypto";

function createHash(password: string) {
  const config = useRuntimeConfig();
  let encpassword = (password + config.apiSecret).split("").join("$");

  encpassword = crypto.createHash("sha384").update(encpassword).digest(
    "base64",
  );

  return encpassword;
}

function isValidPassword(password: string, passwordHash: string) {
  return createHash(password) === passwordHash;
}

export { createHash, isValidPassword };
