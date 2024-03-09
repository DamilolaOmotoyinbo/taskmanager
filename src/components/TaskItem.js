import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTaskForm } from './EditTaskForm'; // Import EditTaskForm component

export const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false); // State to manage editing mode
  const [editedTaskText, setEditedTaskText] = useState(task.task); // State to manage edited task text

  const handleToggleComplete = () => {
    toggleComplete(task.id); // Call the toggleComplete function with the task id
  };

  const handleEditTask = () => {
    setIsEditing(true); // Set editing mode to true when editing is initiated
  };

  const handleSaveEdit = () => {
    editTask(task.id, { task: editedTaskText }); // Call editTask function with updated task text
    setIsEditing(false); // Exit editing mode after saving changes
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Exit editing mode without saving changes
    setEditedTaskText(task.task); // Reset edited task text to original value
  };

  const handleChange = (event) => {
    setEditedTaskText(event.target.value); // Update edited task text as user types
  };

  return (
    <div className='Task'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTaskText}
            onChange={handleChange}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <p onClick={handleToggleComplete} className={`${task.completed ? 'completed' : ''}`}>
          {task.task}
        </p>
      )}

      <div className='icons'>
        {/* Implement edit icon functionality */}
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTask} />

        {/* Implement delete icon functionality */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};
