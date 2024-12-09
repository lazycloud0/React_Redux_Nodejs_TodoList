import React from "react";

const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <li className="todo-item">
      <button className="delete-btn" onClick={() => handleRemoveTodo(todo.id)}>
        <span className="material-icons">delete</span>
      </button>
      <span
        className="todo-text"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#888" : "#2c3e50",
        }}
      >
        {todo.text}
      </span>
      <button
        className="complete-btn"
        onClick={() => handleToggleTodo(todo.id)}
      >
        <span className={`material-icons ${todo.completed ? "completed" : ""}`}>
          {todo.completed ? "check_circle" : "radio_button_unchecked"}
        </span>
      </button>
    </li>
  );
};

export default TodoItem;
