"use server";

import { createUser } from "@/services/user";

export async function getData(prevState, formData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await createUser(data);

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to save" };
  }
}
