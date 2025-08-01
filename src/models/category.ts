import { Category } from '../types/category'
import { CreateCategory, UpdateCategory } from '../utils/category'

const categories: Category[] = [
  {
    id: 'c1',
    name: 'Frontend',
    createdAt: '2025-06-01T09:00:00Z',
    updatedAt: '2025-06-01T09:00:00Z',
  },
  {
    id: 'c2',
    name: 'Backend',
    createdAt: '2025-06-02T10:00:00Z',
    updatedAt: '2025-06-02T10:00:00Z',
  },
  {
    id: 'c3',
    name: 'DevOps',
    createdAt: '2025-06-03T11:00:00Z',
    updatedAt: '2025-06-03T11:00:00Z',
  },
  {
    id: 'c4',
    name: 'UX/UI',
    createdAt: '2025-06-04T12:00:00Z',
    updatedAt: '2025-06-04T12:00:00Z',
  },
  {
    id: 'c5',
    name: 'Testing',
    createdAt: '2025-06-05T13:00:00Z',
    updatedAt: '2025-06-05T13:00:00Z',
  },
  {
    id: 'c6',
    name: 'Security',
    createdAt: '2025-06-06T14:00:00Z',
    updatedAt: '2025-06-06T14:00:00Z',
  },
  {
    id: 'c7',
    name: 'Maintenance',
    createdAt: '2025-06-07T15:00:00Z',
    updatedAt: '2025-06-07T15:00:00Z',
  },
  {
    id: 'c8',
    name: 'Analytics',
    createdAt: '2025-06-08T16:00:00Z',
    updatedAt: '2025-06-08T16:00:00Z',
  },
  {
    id: 'c9',
    name: 'Project Management',
    createdAt: '2025-06-09T17:00:00Z',
    updatedAt: '2025-06-09T17:00:00Z',
  },
  {
    id: 'c10',
    name: 'Research',
    createdAt: '2025-06-10T18:00:00Z',
    updatedAt: '2025-06-10T18:00:00Z',
  },
]

export const CategoryModel = {
  findAll: () => categories,
  findById: (id: string) => categories.find((category) => category.id === id),
  create: (data: CreateCategory) => {
    const now = new Date().toISOString()
    const category: Category = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    }
    categories.push(category)
    return category
  },
  update: (id: string, data: UpdateCategory) => {
    const category = categories.find((category) => category.id === id)
    if (!category) return null
    Object.assign(category, data, { updatedAt: new Date().toISOString() })
    return category
  },
  delete: (id: string) => {
    const index = categories.findIndex((category) => category.id === id)
    if (index === -1) return false
    categories.splice(index, 1)
    return true
  },
}
