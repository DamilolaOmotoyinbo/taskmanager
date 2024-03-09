import React, { useState } from "react";
import { AddTaskForm } from "./AddTaskForm";
import {TaskItem} from "./TaskItem"
import { v4 as uuidv4 } from "uuid";
import { EditTaskForm } from "./EditTaskForm";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(todo => todo.id !== id)); // Change tasks.id to todo.id
  };

  const toggleEdit = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, isEditing: !task.isEditing} : task));
  };

  const editTaskById = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? {...task, ...updatedTask} : task));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? {...task, ...updatedTask} : task));
  };

  return (
    <div className="TaskList">
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        task.isEditing ? (
          <EditTaskForm key={index} editTask={updatedTask => editTaskById(task.id, updatedTask)} task={task} toggleEdit={() => toggleEdit(task.id)} />
        ) : (
          <TaskItem key={index} task={task} toggleComplete={() => toggleComplete(task.id)} deleteTask={() => deleteTask(task.id)} editTask={(id, updatedTask) => editTask(id, updatedTask)}/>

        )
      ))}
    </div>
  );
};

