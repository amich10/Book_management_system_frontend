import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import from ''

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is home page.</h1>}/>
        <Route path='/about' element={<h1>This is about page.</h1>}/>
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

export default App

