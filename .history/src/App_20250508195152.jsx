import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const address  = "Lalipur"
  const name = "Amich Budha Magar"


  return (
    <>
      <div>
        <h1>Hello, my name is {name} and I live in </h1>
        <p>Count : {count}</p>
        <p> {1+1}</p>
      </div>
       
    </>
  )
}

export default App

