import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();
// const PORT = process.env.PORT;
const PORT = 9091;

//CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // React app URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIOMS"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Todo List API!");
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
