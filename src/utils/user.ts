import z from "zod";
import { userSchema } from "../types/user";

export const createUserSchema = userSchema.pick({ name: true, age: true, email: true })
export const updateUserSchema = userSchema.pick({ name: true, age: true, email: true })

export type CreateUser = z.infer<typeof createUserSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>
