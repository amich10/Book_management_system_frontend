import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route  path="/:id" element={<SinglePage/>}/>
        <Route  path="/create" element={<Cre}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

