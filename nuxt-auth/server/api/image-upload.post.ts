// @ts-ignore
import ImageKit from "imagekit";
// import { jwtSign, jwtVerify } from "~/utils/jwt";

// SDK initialization

const imagekit = new ImageKit({
  publicKey: "public_HEx0gDETaryY5xmxDDD66Uhx5dM=",
  privateKey: useRuntimeConfig().imagekitPrivate,
  urlEndpoint: "https://ik.imagekit.io/gdf0t6a24",
});

export default defineEventHandler(async (event) => {
  const data = await readMultipartFormData(event);

  // @ts-ignore
  let res = imagekit.upload({ file: data[0].data, fileName: data[0].filename });

  return res;
});
