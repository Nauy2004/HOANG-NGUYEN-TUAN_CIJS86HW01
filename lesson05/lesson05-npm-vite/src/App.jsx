import { useState } from 'react'
import './App.css'
import TodoHeader from './componenst/todoHeader'
import TodoNavigation from './componenst/todoNavigation'
import TodoInput from './componenst/todoInput'
import todoData from './data/Todo'

function App() {
  let style = `todoApp container position-absolute 
  top-50 start-50 translate-middle `
  //khởi tạo danh sách state lưu các task hiển thị
  let [allTask,setAllTask] = useState(todoData) 
  // hàm thay đổi trạng thái checkbox
  let onHandlerChange = (taskChecked) =>{
    let findTask = allTask.findIndex((taskItem) =>{
      return taskItem.id == taskChecked.target.name
    })
    let newArr =[...allTask]
    newArr[findTask].status= !taskChecked.target.checked
    setAllTask(newArr)
  }
  //hàm xử lý xóa task
  let handlerDelete = (id) =>{
    let findTask = allTask.findIndex((taskItem) =>{
      return taskItem.id == id
    })
    let newArr =[...allTask]
    newArr.splice(findTask,1)
    setAllTask(newArr)
  }
  // khởi tạo danh sách state lưu giá trị input
  let [valueInput,setValueInput] = useState('')
  // hàm event lấy giá trị input 
  let hendlerValueInput = (e)=>{
    let str =  valueInput.slice()
    console.log(str)
    str = e.target.value
    setValueInput(str)
  }
  // hàm thêm phần tử vào danh sách state lưu các task hiển thị
  const onAddTodo = (newTodo) => {
    const newTodps = [...allTask, newTodo];
    setAllTask(newTodps);
  };
  // hàm event onClick đẩy dữ liệu vào hàm thêm phần tử
  const onClickAddButton = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      taskName: valueInput,
      status: true,
    };
    onAddTodo(newTodo)
  };
  
  return (
    <div className={style}>
      <TodoHeader/>
      <TodoInput hendlerValueInput ={hendlerValueInput}/>
      <TodoNavigation 
      data = {allTask} 
      onHandlerChange = {onHandlerChange} 
      handlerDelete = {handlerDelete}
      onClickAddButton = {onClickAddButton}
      />
    </div>
  )
}

export default App
