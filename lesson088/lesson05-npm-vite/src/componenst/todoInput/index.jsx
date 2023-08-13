import { TodoContext } from '../../context/context'
import './todoInput.css'
import React, { useContext } from 'react'

function TodoInput() {
  const {hendlerValueInput} = useContext(TodoContext)
  return (
    <div className='form-input'>
        <input type="text" placeholder='Enter new task' onChange={hendlerValueInput} />
    </div>
  )
}

export default TodoInput