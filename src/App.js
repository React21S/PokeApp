
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
import{useEffect, useState} from "react";



function App() {
  const [favorites, setFavorites]=useState([]);

  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  useEffect(()=>{
    if(getArray !==0){
      setFavorites(getArray);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const favHandler=(pokemon)=>{
    let item = favorites.some(item=>item.id === pokemon.id);

    if(!item){
      setFavorites(prevState=>[...prevState, pokemon]);
      // localStorage.setItem(pokemon.name, JSON.stringify(pokemon))
    } else {
      const newArray =[...favorites];
      newArray.splice(newArray.findIndex(item =>item.id === pokemon.id),1);
      setFavorites(newArray);
      // localStorage.removeItem(pokemon.name)
    }
  }

  return (
    < BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="pokelist" element={<PokeList favHandler={favHandler} favorites={favorites}/>} />
        <Route path=":pokemonName" element={<PokeSingle/>} />
        <Route path="favorites" element={<FavoriteList favHandler={favHandler} favorites={favorites} removeFav={setFavorites}/>} />
      </Route>
    </Route>
  </Routes>
    </ BrowserRouter>
   
);
}

export default App;