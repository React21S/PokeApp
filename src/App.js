
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PokeList from "./components/PokeList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PokeSingle from "./components/PokeSingle";



function App() {
  

  return (
    < BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="pokelist" element={<PokeList/>} />
        <Route path=":pokemonName" element={<PokeSingle/>} />
      </Route>
    </Route>
  </Routes>
    </ BrowserRouter>
   
);
}

export default App;