import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxList from './components/BoxList'

import ToDoList from './components/todoComponents/ToDoList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <BoxList />   */}
      <ToDoList />
    </div>
  )
}

export default App
