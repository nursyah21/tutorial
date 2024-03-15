import { model, Schema } from "mongoose";

/**
 * User Schema
 */
export const user = model(
  "user",
  new Schema({
    nama: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  }, { timestamps: true }),
);
