import { Router } from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "./todos.controller";

export const todosRouter = Router();

todosRouter.get("/todos", getAllTodos);
todosRouter.post("/todos", createTodo);
todosRouter.put("/todos/:id", updateTodo);
todosRouter.delete("/todos/:id", deleteTodo);
