import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={
          <div>
            <h1>This is contact Page</h1>
            <p>Contact us at : ameetmgr10@gmail.com</p>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

