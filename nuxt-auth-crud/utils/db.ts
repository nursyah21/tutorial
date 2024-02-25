// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const config = useRuntimeConfig();
// const client = MongoClient.connect(config.mongodbUri);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongodbUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
