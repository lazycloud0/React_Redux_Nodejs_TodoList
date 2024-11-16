import React, { useState, useEffect } from "react";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const apiUrl = process.env.REACT_APP_API_URL;

const apiURL = "http://localhost:9091";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/todos`);
        setTodos(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setError("Failed to fetch todos");
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(`${apiURL}/api/todos`, {
        text: newTodo,
      });
      setTodos([...todos, response.data]);
      setNewTodo("");
      setError(null);
    } catch (error) {
      console.error("Error adding todo:", error);
      setError("Failed to add todo");
    }
  };

  const handleRemoveTodo = async (id) => {
    try {
      await axios.delete(`${apiURL}/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      setError(null);
    } catch (error) {
      console.error("Error removing todo:", error);
      setError("Failed to remove todo");
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <input
        type="text"
        value={newTodo || ""}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo} disabled={!newTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "red" : "black",
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
