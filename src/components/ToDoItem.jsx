import React from 'react';

const ToDoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
