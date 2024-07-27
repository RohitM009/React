import { useState } from 'react'
import AddTodo from './componets/AddTodo'
import Todos from './componets/Todos'
import './App.css'
function App() {

  return (
    <>
      <h1> ReduxToolkit</h1>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
