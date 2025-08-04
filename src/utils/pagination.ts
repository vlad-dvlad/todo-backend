import z from 'zod'

export const paginationSchema = z.object({
  page: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, {
      message: 'Page must be a positive integer',
    })
    .optional(),
  limit: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, {
      message: 'Limit must be a positive integer',
    })
    .optional(),
})
