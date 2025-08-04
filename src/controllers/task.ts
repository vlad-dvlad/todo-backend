import { NextFunction, Request, Response } from 'express'
import { createTaskSchema, updateTaskSchema } from '../utils/tasks'
import * as taskService from '../services/task'

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await taskService.getAllTasks()
    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await taskService.getTaskbyId(+req.params.id)

    if (!data) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(data)
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

    const data = await taskService.createTask(req.body)

    if (!data) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.status(201).json(data)
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

    const data = await taskService.updateTask(id, req.body)

    if (!data) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(data)
  } catch (e) {
    next(e)
  }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id

    const data = await taskService.deleteTask(id)

    if (!data) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.status(204).send({ message: `Task with id: ${data.id} deleted` })
  } catch (e) {
    next(e)
  }
}
