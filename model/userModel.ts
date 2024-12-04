import { model, Schema, Document } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  isVerifiedToken: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    isVerifiedToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
