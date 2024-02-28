import { Router } from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  addTask,
  updateTask,
  deleteTask,
} from "./todos.controller";

export const todosRouter = Router();

todosRouter.get("/todos", getAllTodos);
todosRouter.post("/todos", createTodo);
todosRouter.put("/todos/:id", updateTodo);
todosRouter.post("/todos/:id/tasks", addTask);
todosRouter.put("/tasks/:taskId", updateTask);
todosRouter.delete("/tasks/:taskId", deleteTask);
todosRouter.delete("/todos/:id", deleteTodo);
