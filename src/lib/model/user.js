import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

if (mongoose.connection.models["userdatas"]) {
  delete mongoose.connection.models["userdatas"];
}
export const UserModel =
  mongoose.models.userdatas || mongoose.model("userdatas", userSchema); //check model is already exist or not
