import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {}

function App() {

  const [count, setCount] = useState(0)

  const address  = "Lalipur"
  const name = "Amich Budha Magar"


  return (
    <>
      <div>
        <h1 style={{color:"red", backgroundColor:"green", padding:"2px", margin:"1px", width:'500px'}}>Hello, my name is {name} and I live in {address}.</h1>
        <p>Count : {count}</p>
        <p> {1+1}</p>
      </div>  
    </>
  )
}

export default App

