import { Request, Response, NextFunction } from 'express'

export const parseIdParam = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID parameter' })
  }
  req.params.id = id as unknown as string
  next()
}
