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
    origin: "http://localhost:9091", // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Todo List API!");
});

app.get("/api/todos", (req, res) => {
  res.json([{ id: 1, text: "Test todo", completed: false }]);
});

app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
