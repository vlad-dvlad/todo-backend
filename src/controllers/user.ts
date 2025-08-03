import { Request, Response } from 'express'
import { createUserSchema, updateUserSchema } from '../utils/user'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany()
    res.json(data)
  } catch (e) {
    res.json(e)
  }
}

export const getUserById = async (req: Request, res: Response) => {
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
    res.json(e)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const result = createUserSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error })
    }
    const user = await prisma.user.create({ data: req.body })
    res.status(201).json(user)
  } catch (e) {
    res.json(e)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const result = updateUserSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error })
    }
    const user = await prisma.user.update({
      where: {
        id: +req.params.id,
      },
      data: req.body,
    })
    res.json(user)
  } catch (e) {
    res.json(e)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.delete({
      where: {
        id: +req.params.id,
      },
    })
    res.status(204).send({ message: `User with id: ${response.id} deleted` })
  } catch (e) {
    res.json(e)
  }
}
