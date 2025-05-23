import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className='bg-red-200'>This is home page.</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

