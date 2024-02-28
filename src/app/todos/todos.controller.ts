import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      done: true,
      tasks: true,
    },
  });
  res.status(200).json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const todo = await prisma.todo.create({
    data: {
      title,
    },
  });
  res.json(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, done } = req.body;
  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      done,
    },
  });
  res.json(todo);
};

export const addTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tasksArray = req.body;
  const task = await prisma.task.createMany({
    data: tasksArray.map((task: any) => ({
      todoId: id,
      ...task,
    })),
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const data = req.body;
  const task = await prisma.task.updateMany({
    where: {
      id: taskId,
    },
    data,
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const task = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  res.json(task);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });
  res.json(todo);
};
