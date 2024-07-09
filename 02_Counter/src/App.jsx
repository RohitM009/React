import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(15);
  let [statement,setStatment]=useState("")
  // let count=5;

  const addValue=()=>{
    // console.log("Value Added",Math.random())
    if(count < 20){
      setCount(count+1);
    }
    else{
      setCount(count);
      setStatment("Limit Reached",{count})
    }
    
  }
  const removeValue=()=>{
    setCount(count >0 ? count -1:0)
  }

  return (
    <>
     <h1>Rohit Maske</h1>
     <h2>Counter Value : {count} </h2>

     <button
     onClick={addValue}>Add Value</button>
     <br></br>
     <button
     onClick={removeValue}>Remove Value</button>
     <p>{statement}</p>
    </>
  )
}

export default App
