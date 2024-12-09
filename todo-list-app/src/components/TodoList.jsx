import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
