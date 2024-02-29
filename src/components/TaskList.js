import React, { useState } from "react";
import { AddTaskForm } from "./AddTaskForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TaskList = () => {
  const { tasks, setTasks } = useState([]);
  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), task: tasks, completed: false, isEditing: false },
    ]);
    console.log(tasks);
  };
  return (
    <div className="TaskList">
      <AddTaskForm addTask={addTask} />
    </div>
  );
};
