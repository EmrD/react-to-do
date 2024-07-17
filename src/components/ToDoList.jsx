import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
