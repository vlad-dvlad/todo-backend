import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { ZodError } from 'zod'

type AppError = {
  status?: number
  message: string
  details?: string
}

export const errorMiddleware = (err: unknown, req: Request, res: Response) => {
  const customError: AppError = {
    status: 500,
    message: 'Something went wrong',
  }

  if (err instanceof ZodError) {
    // Zod validation error
    customError.status = 400
    customError.message = 'Validation failed'
    customError.details = (err as ZodError).message
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Prisma known errors
    customError.status = 400
    switch (err.code) {
      case 'P2002':
        customError.message = `Unique constraint failed on the field: ${(err.meta?.target as string[])?.join(', ')}`
        break
      case 'P2025':
        customError.message = 'Record not found'
        break
      default:
        customError.message = `Database error: ${err.message}`
        break
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    // Prisma validation (raw)
    customError.status = 400
    customError.message = 'Prisma validation error'
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    // Prisma initialization error
    customError.status = 500
    customError.message = 'Database connection error'
  } else if (err instanceof Error) {
    // General message
    customError.message = err.message
  }

  res.status(customError.status || 500).json({
    success: false,
    message: customError.message,
    details: customError.details,
  })
}
