import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route  path="/:id" element={<SinglePage/>}/>
        <Route  path="/create" element={<CreatePage/>}/>
        <Route  path="/:id" element={</}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

