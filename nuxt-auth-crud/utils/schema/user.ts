import {Schema, model} from "mongoose";

/**
 * User Schema
 */
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const User = model("User", UserSchema);
