import express from "express";
import { todosRouter } from "./app/todos/todos.routes";
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", todosRouter);
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
