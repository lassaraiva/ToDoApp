import React from 'react';

const TodoItem = ({ task, onDelete, onToggleDone }) => {
  return (
    <tr>
      <td>{task.text}</td>
      <td>
        <button 
          onClick={onToggleDone} 
          style={{ backgroundColor: task.done ? '#c6ff00' : '' }} 
          className="done-Button"
        >
          ✔
        </button>
      </td>
      <td>
        <button onClick={onDelete} className="delete-toDo-button">X</button>
      </td>
    </tr>
  );
};

export default TodoItem;