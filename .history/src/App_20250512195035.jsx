import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route  path="/:id" element={}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

