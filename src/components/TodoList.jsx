import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, { text: inputValue, done: false }];
      setTasks(newTasks);
      setInputValue('');
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const toggleTaskDone = (index) => {
    const newTasks = tasks.map((task, taskIndex) => 
      taskIndex === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="todo-list">
      <h2>ToDo List</h2>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="name-input"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <table className="toDo-list">
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TodoItem 
              key={index} 
              task={task} 
              onDelete={() => deleteTask(index)} 
              onToggleDone={() => toggleTaskDone(index)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;