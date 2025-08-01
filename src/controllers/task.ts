import { Request, Response } from 'express'
import { TaskModel } from '../models/task'
import { createTaskSchema } from '../utils/tasks'

export const getTasks = (req: Request, res: Response) => {
  const tasks = TaskModel.findAll()
  // mock data
  res.json(tasks)
}

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params
  // mock data
  const task = TaskModel.findById(id)
  if (!task) {
    return res.status(404).json({ error: 'Task not found' })
  }
  res.json(task)
}

export const createTask = (req: Request, res: Response) => {
  const result = createTaskSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({ error: result.error })
  }
  // mock data
  const task = TaskModel.create(result.data)
  res.status(201).json(task)
}

export const updateTask = (req: Request, res: Response) => {
  const id = req.params.id
  // mock data
  const updated = TaskModel.update(id, req.body)
  if (!updated) {
    return res.status(404).json({ error: 'Not found' })
  }

  res.json(updated)
}

export const deleteTask = (req: Request, res: Response) => {
  const id = req.params.id
  // mock data
  const deleted = TaskModel.delete(id)
  if (!deleted) {
    return res.status(404).json({ error: 'Not found' })
  }
  res.status(204).send()
}
