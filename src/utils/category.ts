import z from "zod";
import { categorySchema } from "../types/category";

export const createCategorySchema = categorySchema.pick({ name: true });
export const updateCategorySchema = categorySchema.pick({ name: true });

export type CreateCategory = z.infer<typeof createCategorySchema>
export type UpdateCategory = z.infer<typeof updateCategorySchema>
