import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is home page.</h1>}/>
        <Route path='/about' element={<h1>This is about pa</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

