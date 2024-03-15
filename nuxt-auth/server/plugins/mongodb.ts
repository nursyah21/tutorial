import mongoose from "mongoose";

export default async () => {
  try {
    // mongoose.set('strictQuery', false)
    await mongoose.connect(useRuntimeConfig().mongodbUri);

    console.log("Successfully connected to DB.");
  } catch (error) {
    return createError({
      statusCode: 500,
      //   @ts-ignore
      statusMessage: error,
    });
  }
};