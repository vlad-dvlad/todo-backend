import { NextFunction, Request, Response } from 'express'
import { createTaskSchema, updateTaskSchema } from '../utils/tasks'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await prisma.task.findMany()
    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: +req.params.id,
      },
    })
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(task)
  } catch (e) {
    next(e)
  }
}

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = createTaskSchema.safeParse(req.body)
    if (!result.success) {
      throw result.error
    }
    const task = await prisma.task.create({
      data: req.body,
    })

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.status(201).json(task)
  } catch (e) {
    next(e)
  }
}

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id
    const result = updateTaskSchema.safeParse(req.body)
    if (!result.success) {
      throw result.error
    }
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: req.body,
    })

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(task)
  } catch (e) {
    next(e)
  }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id
    const task = await prisma.task.delete({
      where: {
        id: id,
      },
    })

    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.status(204).send({ message: `Task with id: ${task.id} deleted` })
  } catch (e) {
    next(e)
  }
}
