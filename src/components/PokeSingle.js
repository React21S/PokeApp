import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";
import Loading from './Loading';
import Button from 'react-bootstrap/Button';


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
        <div>
            {isLoading && <Loading/>}
            {!isLoading && (
                <div>
                    <p>This is {pokemon.name} Pokemon</p>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon}/>
                    <h2>This is {pokemon.name} Pokemon</h2>
                    <h2>Weight: {pokemon.weight} kg</h2>
                    <h3>Height: {pokemon.height}0 cm</h3>
                    <h3>Experience: {pokemon.base_experience}</h3>
                    <p>Experience: {pokemon.base_experience}</p>
                    <h3>Types:{" "} 
                    <ul>
                    {pokemon.types.map((item)=>(<li key={item.type.name}>{item.type.name}</li>))}
                    </ul>
                    </h3>
                </div>
            )}
            <Button onClick={()=>navigate(-1)}>Back to list</Button>
        </div>
    );
};

export default PokeSingle;