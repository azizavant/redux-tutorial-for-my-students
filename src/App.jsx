import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, changeStatus } from './store/todo-reducer.js'

function App() {
  const dispatch = useDispatch()
  const { todoReducer: todolist } = useSelector((state) => state)
  const [taskTitle, setTaskTitle] = useState('')

  const changeStatusHandle = (taskId) => {
    dispatch(changeStatus(taskId))
  }

  const createNewTask = () => {
    dispatch(addTask(taskTitle))
    setTaskTitle('')
  }

  return (
    <div>
      <h1>{todolist.title}</h1>
      <input type="text" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle}/>
      <button onClick={createNewTask}>add</button>
      <ul>
        {todolist?.task?.map((item) => {
          return <li key={item.id}>
            <input type="checkbox" checked={item.isDone} onChange={() => changeStatusHandle(item.id)}/>
            {item.title}
          </li>
        })}
      </ul>
    </div>
  )
}

export default App
