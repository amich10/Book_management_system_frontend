import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>Count {count}</p>
        <p> {1+1} = This prints 2 </p>
      </div>
       
    </>
  )

  function sayHello () {
    console.log("Hello My name is Haha")
  }
}

export default App
