import {useState, useEffect} from "react";
import axios from 'axios';
import PokeCard from "./PokeCard";
import Loading from "./Loading";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';




function PokeList() {
  const [pokemon, setPokemon]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPokemons, setNextPokemons] = useState("//pokeapi.co/api/v2/pokemon?limit=20&offset=0");

//   const [previousPokemons, setPreviousPokemons] = useState("//pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  

  useEffect(()=>{
    getPokemons();
   
  }, []);

 

  const getPokemons = ()=>{
    axios.get(nextPokemons).catch(error=>{
        console.log(error);
    }).then((response) =>{
        const fetches = response.data.results.map((p)=>axios.get(p.url).then((response)=>response.data));

        setNextPokemons(response.data.next);

       Promise.all(fetches).then((data)=>{
          setPokemon((prevState)=>[...prevState, ...data]);
          
        }); 
        setIsLoading(false);
        console.log(pokemon);
    });
  };

  return (
    <div>
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
    <div className="d-grid gap-5">
    <Button className="justify-content-center align-items-center" variant="primary" size="lg" onClick={getPokemons}>Load more</Button>
    {/* <Button variant="primary" size="lg" onClick={getPokemons}>previous</Button> */}
    </div>
 </div> 
);
}

export default PokeList;