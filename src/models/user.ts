import { User } from '../types/user'
import { CreateUser, UpdateUser } from '../utils/user'

const users: User[] = []

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
