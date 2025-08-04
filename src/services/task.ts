import { PrismaClient } from '@prisma/client'
import { CreateTask, UpdateTask } from '../utils/tasks'

const prisma = new PrismaClient()

export const getAllTasks = async (page: number, limit: number) => {
  const skip = (page - 1) * limit
  const [items, total] = await Promise.all([
    prisma.task.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        assignedUser: true,
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

export const getTaskbyId = async (id: number) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
    include: {
      assignedUser: true,
    },
  })

  return task
}

export const createTask = async (data: CreateTask) => {
  const task = await prisma.task.create({
    data,
  })

  return task
}

export const updateTask = async (id: number, data: UpdateTask) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data,
  })

  return task
}

export const deleteTask = async (id: number) => {
  const task = await prisma.task.delete({
    where: {
      id: id,
    },
  })

  return task
}

export const assignUser = async (id: number, userId: number) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      assignedUserId: userId,
    },
    include: {
      assignedUser: true,
    },
  })

  return task
}

export const unassignedUser = async (id: number) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      assignedUserId: null,
    },
  })

  return task
}
