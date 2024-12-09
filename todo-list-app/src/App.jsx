import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

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

  const handleToggleTodo = async (id) => {
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      await axios.put(`${apiURL}/api/todos/${id}`, {
        completed: !todo.completed,
      });

      setTodos(
        todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
      setError(null);
    } catch (error) {
      console.error("Error toggling todo:", error);
      setError("Failed to update todo");
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

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default App;
