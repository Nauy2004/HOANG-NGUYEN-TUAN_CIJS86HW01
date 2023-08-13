import { useContext } from 'react'
import './App.css'
import TodoHeader from './componenst/todoHeader'
import TodoNavigation from './componenst/todoNavigation'
import TodoInput from './componenst/todoInput'
import { TodoProvider } from './context/context'

function App() {  
  let todoStyle = `todoApp container position-absolute 
  top-50 start-50 translate-middle`
  return (
    <TodoProvider>
      <div className={todoStyle}>
        <TodoHeader/>
        <TodoInput />
        <TodoNavigation />
      </div>
    </TodoProvider>
  )
}

export default App
