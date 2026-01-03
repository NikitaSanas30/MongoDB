import mongoose from "mongoose";

const connectionStr = "mongodb://localhost:27017/signup";
let isconnected = false;
export async function connectdb() {
  if (isconnected) return;

  await mongoose.connect(connectionStr);
  isconnected = true;
}
