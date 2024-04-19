import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let newobj={
    username:'deeepak',
    email:'deepakdas538@gmail.com'
  }
  let newarr=[1,3,54,5,5,5]

  return (
    <>
      <h1 className="bg-green-400 text-black p-10 rounded-xl
      mb-4">
      Hello world!
    </h1>
    <Card channel={newobj} username="deepak" p="jabfhabfhafhaefhaefa" btntext="Click Me"/>
    <Card newarr1={newarr}  username="sam" p="safdjajnjfjkfbkjbfafbkfkbf" btntext="View Me"/>
    

    </>
  )
}

export default App
