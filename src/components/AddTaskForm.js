import React, {useState} from 'react'
// import { TaskList } from './TaskList';

export const AddTaskForm = ({addTask}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTask(value)

        setValue("")
    }
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <input type='text' className='task-input' value = {value} placeholder='Input your task here'onChange={(e) => setValue (e.target.value)}/>
        <button type='submit' className='task-btn'>Add Task</button>
    </form>
  )
}
