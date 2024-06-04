import React, {useState} from 'react'
// import { TaskList } from './TaskList';

export const EditTaskForm = ({editTask, task}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id)

        setValue("")
    }
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <input type='text' className='task-input' value = {value} placeholder='Update Task'onChange={(e) => setValue (e.target.value)}/>
        <button type='submit' className='task-btn'>Update Task</button>
    </form>
  )
}
