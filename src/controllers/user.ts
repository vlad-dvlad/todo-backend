import { NextFunction, Request, Response } from 'express'
import { createUserSchema, updateUserSchema } from '../utils/user'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await prisma.user.findMany()
    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: +req.params.id,
      },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }
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
    const user = await prisma.user.create({ data: req.body })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.status(201).json(user)
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
    const user = await prisma.user.update({
      where: {
        id: +req.params.id,
      },
      data: req.body,
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.json(user)
  } catch (e) {
    next(e)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: +req.params.id,
      },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    res.status(204).send({ message: `User with id: ${user.id} deleted` })
  } catch (e) {
    next(e)
  }
}
