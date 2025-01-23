import React, { useState, useEffect } from 'react';
import { TaskService } from '../Service/API';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await TaskService.getAllTasks();
    setTasks(data);
  };

  const addTask = async () => {
    if (newTask.title) {
      const taskData = {
        title: newTask.title,
        description: newTask.description
      };
      const task = await TaskService.createTask(taskData);
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '' });
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const updatedTask = await TaskService.updateTask(id, updates);
      setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    await TaskService.deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="task-list-container">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task title"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          placeholder="Task description (optional)"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasks-section">
        <h2>Active Tasks</h2>
        <div className="task-items">
          {tasks.filter(task => !task.completed).map(task => (
            <div key={task._id} className="task-item">
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTask(task._id, { completed: !task.completed })}
                />
                <div className="task-text">
                  <h3>{task.title}</h3>
                  {task.description && <p>{task.description}</p>}
                  <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
                </div>
              </div>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          ))}
        </div>

        <h2>Completed Tasks</h2>
        <div className="task-items">
          {tasks.filter(task => task.completed).map(task => (
            <div key={task._id} className="task-item completed">
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTask(task._id, { completed: !task.completed })}
                />
                <div className="task-text">
                  <h3>{task.title}</h3>
                  {task.description && <p>{task.description}</p>}
                  <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
                </div>
              </div>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;