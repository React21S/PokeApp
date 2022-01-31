import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";


const PokeSingle = () => {

    const[pokemon, setPokemon]=useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    }, []);

    

    let {pokemonName}= useParams();
    return (
        <div>
            
            This is {pokemonName} Pokemon
           
        </div>
    );
};

export default PokeSingle;