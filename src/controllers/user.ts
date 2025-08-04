import { NextFunction, Request, Response } from 'express'
import { createUserSchema, updateUserSchema } from '../utils/user'
import * as userService from '../services/user'

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const data = await userService.getUsers(page, limit)
    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.getUserById(+req.params.id)

    if (!data) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = createUserSchema.safeParse(req.body)

    if (!result.success) {
      throw result.error
    }
    const data = await userService.createUser(req.body)

    res.status(201).json(data)
  } catch (e) {
    next(e)
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = updateUserSchema.safeParse(req.body)
    if (!result.success) {
      throw result.error
    }

    const data = await userService.updateUser(+req.params.id, req.body)

    if (!data) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.deleteUser(+req.params.id)

    if (!data) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.status(204).send({ message: `User with id: ${data.id} deleted` })
  } catch (e) {
    next(e)
  }
}
