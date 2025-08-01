import { Category } from "../types/category";
import { CreateCategory, UpdateCategory } from "../utils/category";

const categories: Category[] = [];

export const CategoryModel = {
    findAll: () => categories,
    findById: (id: string) => categories.find((category) => category.id === id),
    create: (data: CreateCategory) => {
        const now = new Date().toISOString()
        const category: Category = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: now,
            updatedAt: now,
        }
        categories.push(category)
        return category;
    },
    update: (id: string, data: UpdateCategory) => {
        const category = categories.find((category) => category.id === id);
        if (!category) return null;
        Object.assign(category, data, { updatedAt: new Date().toISOString() })
        return category;
    },
    delete: (id: string) => {
        const index = categories.findIndex((category) => category.id === id)
        if (index === -1) return false;
        categories.splice(index, 1)
        return true
    }
}