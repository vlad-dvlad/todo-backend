import { Request, Response } from 'express'
import { UserModel } from '../models/user'
import { createUserSchema } from '../utils/user'

export const getUsers = (req: Request, res: Response) => {
  const users = UserModel.findAll()
  // mock data
  res.json(users)
}

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    // mock data
    const user = UserModel.findById(id)
    if (!user) {
        return res.status(404).json({ error: 'User not found!' })
    }
}

export const createUser = (req: Request, res: Response) => {
    const result = createUserSchema.safeParse(req.body)
    if(!result.success) {
        return res.status(400).json({ error: result.error })
    }
    // mock data
    const user = UserModel.create(result.data)
    res.status(201).json(user)
}

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id
  // mocked data
  const updated = UserModel.update(id, req.body)
  if (!updated) {
    return res.status(404).json({ error: 'User not found!' })
  }

  res.json(updated)
}

export const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id
  // mock data
  const deleted = UserModel.delete(id)
  if (!deleted) {
    return res.status(404).json({ error: 'User not found!' })
  }

  res.status(204).send()
}