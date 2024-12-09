import React from 'react';

const TodoForm = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <form onSubmit={handleAddTodo} className="input-container">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">
        <span className="material-icons">add_circle</span>
      </button>
    </form>
  );
};

export default TodoForm;