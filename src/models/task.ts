// temporary mock data
import { Task } from '../types/task'
import { CreateTask, UpdateTask } from '../utils/tasks'

const tasks: Task[] = [
  {
    id: '1',
    name: 'Create landing page',
    category: 'Frontend',
    status: 'TODO',
    createdAt: '2025-07-01T10:00:00Z',
    updatedAt: '2025-07-01T10:00:00Z',
  },
  {
    id: '2',
    name: 'Set up database',
    category: 'Backend',
    status: 'IN_PROGRESS',
    createdAt: '2025-07-02T12:30:00Z',
    updatedAt: '2025-07-03T08:15:00Z',
  },
  {
    id: '3',
    name: 'Fix navbar bug',
    category: 'Frontend',
    status: 'DONE',
    createdAt: '2025-07-04T09:20:00Z',
    updatedAt: '2025-07-04T11:45:00Z',
  },
  {
    id: '4',
    name: 'Deploy API',
    category: 'DevOps',
    status: 'TODO',
    createdAt: '2025-07-05T15:00:00Z',
    updatedAt: '2025-07-05T15:00:00Z',
  },
  {
    id: '5',
    name: 'Update dependencies',
    category: 'Maintenance',
    status: 'REJECTED',
    createdAt: '2025-07-06T10:10:00Z',
    updatedAt: '2025-07-06T10:30:00Z',
  },
  {
    id: '6',
    name: 'Write unit tests',
    category: 'Testing',
    status: 'IN_PROGRESS',
    createdAt: '2025-07-07T08:45:00Z',
    updatedAt: '2025-07-08T09:00:00Z',
  },
  {
    id: '7',
    name: 'Design user profile',
    category: 'UX/UI',
    status: 'TODO',
    createdAt: '2025-07-09T11:20:00Z',
    updatedAt: '2025-07-09T11:20:00Z',
  },
  {
    id: '8',
    name: 'Implement authentication',
    category: 'Security',
    status: 'DONE',
    createdAt: '2025-07-10T14:00:00Z',
    updatedAt: '2025-07-11T10:00:00Z',
  },
  {
    id: '9',
    name: 'Clean up codebase',
    category: 'Maintenance',
    status: 'DONE',
    createdAt: '2025-07-12T07:30:00Z',
    updatedAt: '2025-07-12T08:00:00Z',
  },
  {
    id: '10',
    name: 'Configure CI/CD',
    category: 'DevOps',
    status: 'REJECTED',
    createdAt: '2025-07-13T13:50:00Z',
    updatedAt: '2025-07-13T14:15:00Z',
  },
]

export const TaskModel = {
  findAll: () => tasks,
  findById: (id: string) => tasks.find((task) => task.id === id),
  create: (data: CreateTask) => {
    const now = new Date().toISOString()
    const task: Task = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    }
    tasks.push(task)
    return task
  },
  update: (id: string, data: UpdateTask) => {
    const task = tasks.find((task) => task.id === id)
    if (!task) return null
    Object.assign(task, data, { updatedAt: new Date().toISOString() })
    return task
  },
  delete: (id: string) => {
    const index = tasks.findIndex((task) => task.id === id)
    if (index === -1) return false
    tasks.splice(index, 1)
    return true
  },
}
