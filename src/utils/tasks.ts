import z from 'zod'
import { taskSchema } from '../types/task'

export const createTaskSchema = taskSchema.omit({ id: true, createdAt: true, updatedAt: true })
export const updateTaskSchema = taskSchema.omit({ id: true, createdAt: true, updatedAt: true })

export type CreateTask = z.infer<typeof createTaskSchema>
export type UpdateTask = z.infer<typeof updateTaskSchema>