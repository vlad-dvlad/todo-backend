import z from 'zod'

export const categorySchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Category = z.infer<typeof categorySchema>
