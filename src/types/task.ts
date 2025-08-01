import { z } from 'zod'

export const taskStatus = z.enum(['DONE', 'IN_PROGRESS', 'TODO', 'REJECTED'])

export const taskSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  category: z.string(),
  status: z.enum(['DONE', 'IN_PROGRESS', 'TODO', 'REJECTED']),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type TaskStatusE = z.infer<typeof taskStatus>
