import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={</>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact/>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

