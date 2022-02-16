import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PokeCard from "./PokeCard";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const FavoriteList = ({favHandler, favorites, removeFav}) => {
    let navigate = useNavigate();
    const clearHandler = () => {
        localStorage.clear();
        removeFav([]);
      };

    return (
        <div className="favlist">
           <Container>
                {favorites.length <= 0 ? (
                <div>
                    {" "}
                    <p>Feel free to add some pokemon to your list </p>
                    <Button variant="secondary" onClick={() => navigate("/pokelist")}>
                    Back to Pokelist
                    </Button>
                </div>
                ) : (
                    <div>
                <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3 m-5">
                    {favorites.map((pokemon) => (
                        <PokeCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        pokemonName={pokemon.name}
                        fav={favorites.some((item)=>item.name===pokemon.name)}
                        favClick={()=>favHandler(pokemon)}
                        />      
                    ))}
                </Row>
                <Container>
                <Row>
                  <Button  variant="secondary" size="lg" onClick={clearHandler}>
                    Remove all favourites
                  </Button>
                </Row>
              </Container>
              </div>
                   )}
            </Container>
    </div>
    );
};

export default FavoriteList;