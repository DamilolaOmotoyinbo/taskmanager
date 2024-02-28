import React, {useState} from 'react'

export const AddTaskForm = () => {
    const [value, setValue] = useState("")
  return (
    <form className='TaskForm'>
        <input type='text' className='taskinput' placeholder='Input your task'onChange={handleChange}/>
        <button type='submit' className='task-btn'>Add Task</button>
    </form>
  )
}
