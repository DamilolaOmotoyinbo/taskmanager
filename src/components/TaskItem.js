import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTaskForm } from './EditTaskForm'

export const TaskItem = ({task, toggleComplete, deleteTask, editTask}) => {
  const handleToggleComplete = () => {
    toggleComplete(task.id); // Call the toggleComplete function with the task id
  };
  return (
    <div className='Task'>

<p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>

      <div className='icons'>
        <FontAwesomeIcon icon= {faPenToSquare}onClick=
        {() => editTask (task.id)}/>
        <FontAwesomeIcon icon= {faTrash} onClick=
        {() => deleteTask(task.id)}/>
      </div>
    </div>
  )
}
