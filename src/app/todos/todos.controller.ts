import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error retrieving todos:", error);
    res.status(500).json({ error: "Unable to retrieve todos" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
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

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });
  res.json(todo);
};
