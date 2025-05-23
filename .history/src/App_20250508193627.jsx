import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti quod consequuntur voluptatibus excepturi adipisci, quos recusandae minus porro impedit tenetur officiis perspiciatis ipsam laborum harum saepe aspernatur debitis. Reiciendis!</p>
        <p> {1+1} = This prints 2 </p>
      </div>
       
    </>
  )
}

export default App
