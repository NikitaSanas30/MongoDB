import { connectdb } from "@/lib/mongoose";
import { UserModel } from "@/lib/model/user";

export async function createUser(data) {
  await connectdb();
  return await UserModel.create(data);
}
