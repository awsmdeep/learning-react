import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(0)

  const addvalue=()=>{
    counter=counter+1
    if(counter<=20)
    {
      setCounter(prevCounter=>prevCounter+1)
    }

  }
  const removevalue=()=>{
    if(counter>0)
    setCounter(prevCounter=>prevCounter-1)
  }

  return (
    <>
     <h1>First</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addvalue}>Add Value</button>
     <br/>
     <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
