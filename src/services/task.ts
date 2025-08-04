import { PrismaClient } from '@prisma/client'
import { CreateTask, UpdateTask } from '../utils/tasks'

const prisma = new PrismaClient()

export const getAllTasks = async () => {
  const data = await prisma.task.findMany({
    include: {
      assignedUser: true,
    },
  })
  return data
}

export const getTaskbyId = async (id: number) => {
  const task = await prisma.task.findUnique({
    where: {
      id: id,
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
