import { PrismaClient } from '@prisma/client'
import { CreateUser, UpdateUser } from '../utils/user'

const prisma = new PrismaClient()

export const getUsers = async (page: number, limit: number) => {
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        tasks: true,
      },
    }),
    prisma.task.count(),
  ])
  const hasNextPage = skip + items.length < total

  return {
    total,
    hasNextPage,
    prev: page > 1 ? page - 1 : null,
    next: hasNextPage ? page + 1 : null,
    items,
  }
}

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      tasks: true,
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
