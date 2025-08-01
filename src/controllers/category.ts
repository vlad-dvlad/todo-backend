import { Request, Response } from 'express'
import { CategoryModel } from '../models/category'
import { createCategorySchema } from '../utils/category'

export const getCategories = (req: Request, res: Response) => {
  const categories = CategoryModel.findAll()
  // mock data
  res.json(categories)
}

export const getCategoryById = (req: Request, res: Response) => {
  const { id } = req.params
  // mock data
  const category = CategoryModel.findById(id)
  if (!category) {
    return res.status(404).json({ error: 'Category not found!' })
  }

  res.json(category)
}

export const createCategory = (req: Request, res: Response) => {
  const result = createCategorySchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({ error: result.error })
  }
  // mock data
  const category = CategoryModel.create(result.data)
  res.status(201).json(category)
}

export const updateCategory = (req: Request, res: Response) => {
  const id = req.params.id
  // mock data
  const updated = CategoryModel.update(id, req.body)
  if (!updated) {
    return res.status(404).json({ error: 'Category not found!' })
  }
  res.status(204).send()
}

export const deleteCategory = (req: Request, res: Response) => {
  const id = req.params.id
  // mock data
  const deleted = CategoryModel.delete(id)
  if (!deleted) {
    return res.status(404).json({ error: 'Category not found!' })
  }
  res.status(204).send()
}
