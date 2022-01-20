import {useState, useEffect} from "react";
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



function App() {
  const [pokemons, setPokemons]=useState([]);
  

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
      const fetches = response.data.results.map((p)=>axios.get(p.url).then((response)=>response.data));
      
     Promise.all(fetches).then((data)=>{setPokemons(data);
      }); 
    });
  },[]);
  console.log(pokemons)

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="pokeApp">
        <Container>
          <Navbar.Brand href="#">PokeApp</Navbar.Brand>
        </Container>
      </Navbar>

<Container>
  <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">
  {pokemons.map((pokemon) => (
  <Card bg="secondary" text="dark" key={pokemon.name} style={{ width: '15rem' }}>
        <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
        </Card.Body>
      </Card>
       ))}
  </Row>
</Container>

<Card.Footer  className="text-center">Femi Adesola &copy; {new Date().getFullYear()}</Card.Footer>

    </div>
);
}

export default App;