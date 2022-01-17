// import './App.css';
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
      
     Promise.all(fetches).then((data)=>{setPokemons(data)}); 
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
    {pokemons.map((p)=>(
    <div key={p.name}><li>{p.name}</li>
    {/* <img src={pokemons.sprites.other.dream_world.front_default}/> */}
    </div>
    ))}

  <Card bg="dark" text="light" style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://www.worldatlas.com/r/w960-q80/upload/ea/3f/a4/shutterstock-497360188.jpg" />
        <Card.Body>
            <Card.Title>My poke card </Card.Title>
            <Card.Text>
             Text is going to be here
            </Card.Text>
        </Card.Body>
      </Card>
  </Row>
</Container>


    </div>
);
}

export default App;
