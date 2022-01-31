
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PokeList from "./components/PokeList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PokeSingle from "./components/PokeSingle";
import FavoriteList from "./components/FavoriteList";
import{useState} from "react";



function App() {
  const [favorites, setFavorites]=useState([]);

  const favHandler=(pokemon)=>{
    let item = favorites.some(item=>item.id == pokemon.id);
    if(!item){
      setFavorites(prevState=>[...prevState, pokemon]);
    } else {
      const newArray =[...favorites];
      newArray.splice(newArray.findIndex(item =>item.id === pokemon.id),1);
      setFavorites(newArray);
    }
    console.log("favorite")
    console.log(favorites)
  }

  return (
    < BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="pokelist" element={<PokeList favHandler={favHandler}/>} />
        <Route path=":pokemonName" element={<PokeSingle/>} />
        <Route path="favorites" element={<FavoriteList favHandler={favHandler} favorites={favorites}/>} />
      </Route>
    </Route>
  </Routes>
    </ BrowserRouter>
   
);
}

export default App;