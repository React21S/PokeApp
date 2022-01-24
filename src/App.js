
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PokeList from "./components/PokeList";
import Home from "./components/Home";
import Layout from "./components/Layout";



function App() {
  

  return (
    < BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/pokelist" element={<PokeList/>} />
      </Route>
    </Route>
  </Routes>
    </ BrowserRouter>
   
);
}

export default App;