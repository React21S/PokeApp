import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";
import Loading from './Loading';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PokeSingle = () => {
    let {pokemonName}= useParams();
    let navigate = useNavigate();
    const[pokemon, setPokemon]=useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).catch((error)=>{
            console.log(error);
        })
        .then((response)=>{
            setPokemon(response.data);
            setIsLoading(false)
        });

    }, []);

    

    
    return (
        <div className="pokeSinglePage">
        <Card className="pokeSingleCard">
            {isLoading && <Loading/>}
            {!isLoading && (<div>
               
                <Card.Header bg="primary" className="d-flex justify-content-center" >{pokemon.name}</Card.Header>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon}/>
                   <div className="pokeSingle">
                    <p>This is <span>{pokemon.name}</span> Pokemon </p>
                    <p>Weight: {pokemon.weight} kg</p>
                    <p>Height: {pokemon.height}0 cm</p>
                    <p>Experience: {pokemon.base_experience}</p>
                    <p>Types:{" "} 
                    <ul>
                    {pokemon.types.map((item)=>(<li key={item.type.name}>{item.type.name}</li>))}
                    </ul>
                    </p>
                    </div>
                </div>
            )}
            <Button variant='secondary' onClick={()=>navigate(-1)}>Back to list</Button>
        </Card>
        </div>
    );
};

export default PokeSingle;