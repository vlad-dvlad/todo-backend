// temporary mock data 
import { Task } from "../types/task";

const tasks: Task[] = [];

export const TaskModel = {
    findAll: () => tasks,
    findById: (id: string) => tasks.find(task => task.id === id),
    create: (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
        const now = new Date().toISOString();
        const task: Task = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: now,
            updatedAt: now,
        }
        tasks.push(task);
        return task;
    },
    update: (id: string, data: Partial<Task>) => {
        const task = tasks.find(task => task.id === id);
    if (!task) return null;
    Object.assign(task, data, { updatedAt: new Date().toISOString() });
    return task;
    },
    delete: (id: string) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
    }
}