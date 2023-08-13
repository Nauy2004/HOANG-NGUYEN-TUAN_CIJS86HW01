import todoData from '../data/Todo'
import { useState, createContext } from 'react'

export const TodoContext = createContext({})

export const TodoProvider = ({children}) =>{
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
        let isTrue = true
        allTask.map((itemtask) =>{
            if (itemtask.taskName.toUpperCase() === newTodo.taskName.toUpperCase()) {
                window.alert('đã tồn tại')
                isTrue = false
            }
        })
        if (isTrue) {
            const newTodps = [...allTask, newTodo];
            setAllTask(newTodps);   
        }
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
    return <TodoContext.Provider value={{onClickAddButton,hendlerValueInput,handlerDelete,onHandlerChange,allTask,setAllTask,valueInput,setValueInput}}>
            {children}
    </TodoContext.Provider>
    
}
