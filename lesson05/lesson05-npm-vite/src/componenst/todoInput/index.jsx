import './todoInput.css'
import React from 'react'

function TodoInput(props) {
  let hendlerValueInput = props.hendlerValueInput
  return (
    <div className='form-input'>
        <input type="text" placeholder='Enter new task' onChange={hendlerValueInput} />
    </div>
  )
}

export default TodoInput