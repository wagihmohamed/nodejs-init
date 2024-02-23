import { Router } from "express";
import { getAllTodos } from "./todos.controller";

export const todosRouter = Router();

todosRouter.get("/todos", getAllTodos);
