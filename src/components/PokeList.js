import {useState, useEffect} from "react";
import axios from 'axios';
import PokeCard from "./PokeCard";
import Loading from "./Loading";
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';




function PokeList() {
  const [pokemon, setPokemon]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
      const fetches = response.data.results.map((p)=>axios.get(p.url).then((response)=>response.data));
      
     Promise.all(fetches).then((data)=>{
        setPokemon(data);
        setIsLoading(false);
      }); 
 
    });
   
  },[]);
  console.log(pokemon);

  return (

  

<Container>
  <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">
  {isLoading && <Loading/>}
  {
    !isLoading &&
  pokemon.map((pokemon) => (
 <PokeCard
 key={pokemon.name}
 name={pokemon.name}
 image={pokemon.sprites.other.dream_world.front_default}
 />      
 ))}
  </Row>
</Container>
 
   
);
}

export default PokeList;