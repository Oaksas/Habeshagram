"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { CreatePost } from "./schemas";
import { getUserId } from "./utils";
import prisma from "./prisma";

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();

  const validatedFields = CreatePost.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields. Failed to create field.",
    };
  }

  const { fileUrl, caption } = validatedFields.data;

  try {
    await prisma.post.create({
      data: {
        fileUrl,
        caption,
        userId,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to create post.",
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
