import React, { useContext } from 'react'
import './todoNav.css'
import { TodoContext } from '../../context/context'

function TodoNavigation1() {
  const {onHandlerChange,
      handlerDelete,
      onClickAddButton,
      allTask} = useContext(TodoContext)
  let renderAllTask = () => {
    let styleGr = {}
    return allTask.map((itemTask, index) => {
      if (itemTask.status) {
        styleGr = {    
          backgroundColor:" #e1c1ac",
        }
      } else {
        styleGr = {
          backgroundColor:" #352323",
          color : "#604a4c"
        }
      }
      return (
        <div key={itemTask.id} className='group-check d-flex w-100' style={styleGr}>
          <div className='form-check'>
            <input type="checkbox" name={itemTask.id} onChange={onHandlerChange}/>
            <span>{itemTask.taskName}</span>
          </div>
          <button type='button' onClick={()=>{handlerDelete(itemTask.id)}}>Delete</button>
        </div>
      )
    })
  }
  let renderActiveTask = () =>{
    return allTask.map((itemTask) => {
      if (itemTask.status) {
        let styleGr = {backgroundColor:" #e1c1ac"}
        return (
          <div key={itemTask.id} className='group-check d-flex w-100' style={styleGr}>
            <div className='form-check'>
              <input type="checkbox" name=""/>
              <span>{itemTask.taskName}</span>
            </div>
            <button type='button'>Delete</button>
          </div>
        )
      }
    })
  }
  let renderCompletedTask = ()=>{
    return allTask.map((itemTask,index) => {
      if (!itemTask.status) {
        let styleGr = {
          backgroundColor:" #352323",
          color : "#604a4c"
        }
        return (
          <div key={itemTask.id} className='group-check d-flex w-100' style={styleGr}>
            <div className='form-check'>
              <input type="checkbox" name="" checked/>
              <span>{itemTask.taskName}</span>
            </div>
            <button type='button'>Delete</button>
          </div>
        )
      }
    })
  }

  return (
    <div className="TodoNavTab">
      <div className='group-nav'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">ALL</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">ACTIVE</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">COMPLETED</button>
          </li>
        </ul>
        <button className='btn-add' onClick={onClickAddButton}>ADD</button>
      </div>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>{renderAllTask()}</div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>{renderActiveTask()}</div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>{renderCompletedTask()}</div>
      </div>
    </div>
  )
}

export default TodoNavigation1