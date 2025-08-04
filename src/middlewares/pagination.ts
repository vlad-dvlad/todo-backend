import { Request, Response, NextFunction } from 'express'
import { paginationSchema } from '../utils/pagination'

export const parsePaginationQuery = (req: Request, res: Response, next: NextFunction) => {
  const result = paginationSchema.safeParse(req.query)

  if (!result.success) {
    return res.status(400).json({ message: 'Invalid pagination parameters', errors: result.error })
  }

  next()
}
