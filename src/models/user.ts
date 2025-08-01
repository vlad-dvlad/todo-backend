import { User } from '../types/user'
import { CreateUser, UpdateUser } from '../utils/user'

const users: User[] = [
    {
    id: 'u1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    age: 28,
    createdAt: '2025-06-01T09:00:00Z',
    updatedAt: '2025-06-01T09:00:00Z',
  },
  {
    id: 'u2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    age: 35,
    createdAt: '2025-06-02T10:15:00Z',
    updatedAt: '2025-06-03T11:00:00Z',
  },
  {
    id: 'u3',
    name: 'Charlie Adams',
    email: 'charlie.adams@example.com',
    age: 24,
    createdAt: '2025-06-03T08:45:00Z',
    updatedAt: '2025-06-03T08:45:00Z',
  },
  {
    id: 'u4',
    name: 'Diana Miller',
    email: 'diana.miller@example.com',
    age: 31,
    createdAt: '2025-06-04T12:30:00Z',
    updatedAt: '2025-06-04T13:00:00Z',
  },
  {
    id: 'u5',
    name: 'Ethan Brown',
    email: 'ethan.brown@example.com',
    age: 27,
    createdAt: '2025-06-05T14:10:00Z',
    updatedAt: '2025-06-05T14:10:00Z',
  },
  {
    id: 'u6',
    name: 'Fiona Wilson',
    email: 'fiona.wilson@example.com',
    age: 29,
    createdAt: '2025-06-06T09:30:00Z',
    updatedAt: '2025-06-06T10:00:00Z',
  },
  {
    id: 'u7',
    name: 'George Davis',
    email: 'george.davis@example.com',
    age: 38,
    createdAt: '2025-06-07T11:20:00Z',
    updatedAt: '2025-06-07T11:45:00Z',
  },
  {
    id: 'u8',
    name: 'Hannah Lee',
    email: 'hannah.lee@example.com',
    age: 26,
    createdAt: '2025-06-08T08:00:00Z',
    updatedAt: '2025-06-08T08:00:00Z',
  },
  {
    id: 'u9',
    name: 'Ivan Garcia',
    email: 'ivan.garcia@example.com',
    age: 33,
    createdAt: '2025-06-09T13:40:00Z',
    updatedAt: '2025-06-10T09:10:00Z',
  },
  {
    id: 'u10',
    name: 'Julia Martin',
    email: 'julia.martin@example.com',
    age: 30,
    createdAt: '2025-06-10T10:25:00Z',
    updatedAt: '2025-06-10T10:25:00Z',
  },
]

export const UserModel = {
  findAll: () => users,
  findById: (id: string) => users.find((task) => task.id === id),
  create: (data: CreateUser) => {
    const now = new Date().toISOString()
    const user: User = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    }
    users.push(user)
    return user
  },
  update: (id: string, data: UpdateUser) => {
    const user = users.find((user) => user.id === id)
    if (!user) return null
    Object.assign(user, data, { updatedAt: new Date().toISOString() })
    return user
  },
  delete: (id: string) => {
    const index = users.findIndex((user) => user.id === id)
    if (index === -1) return false
    users.splice(index, 1)
    return true
  },
}
