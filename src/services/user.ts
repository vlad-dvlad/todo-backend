import { PrismaClient } from '@prisma/client'
import { CreateUser, UpdateUser } from '../utils/user'

const prisma = new PrismaClient()

export const getUsers = async () => {
  const data = await prisma.user.findMany({
    include: {
      tasks: true,
    },
  })
  return data
}

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  return user
}

export const createUser = async (data: CreateUser) => {
  const user = await prisma.user.create({ data })

  return user
}

export const updateUser = async (id: number, data: UpdateUser) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  })

  return user
}

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  })

  return user
}
