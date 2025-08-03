import { Request, Response } from 'express'
import { createTaskSchema, updateTaskSchema } from '../utils/tasks'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTasks = async (req: Request, res: Response) => {
  try {
    const data = await prisma.task.findMany()
    res.json(data)
  } catch (e) {
    res.send(e)
  }
}

export const getTaskById = async (req: Request, res: Response) => {
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
    res.send(e)
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const result = createTaskSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error })
    }
    const task = await prisma.task.create({
      data: req.body,
    })
    res.status(201).json(task)
  } catch (e) {
    res.send(e)
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id
    const updated = updateTaskSchema.safeParse(req.body)
    if (!updated.success) {
      return res.status(400).json({ error: updated.error })
    }
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: req.body,
    })
    res.json(task)
  } catch (e) {
    res.send(e)
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id
    // mock data
    const response = await prisma.task.delete({
      where: {
        id: id,
      },
    })
    res.status(204).send({ message: `Task with id: ${response.id} deleted` })
  } catch (e) {
    res.send(e)
  }
}
