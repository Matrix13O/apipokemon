import React, { useEffect, useState } from 'react';
import '../css/estilos.css'

function Card4(props){

const [pokemon,setPokemon]=useState({});
const [isLoading,setIsLoading]=useState(true);
    const url='https://pokeapi.co/api/v2/pokemon/405'
    const fethApi=async()=>{
        const response=await fetch(url)
        const json=await response.json()
        setPokemon(json)

    }

    useEffect(()=>{
        (async()=>{
            await fethApi()
            setIsLoading(false)
        })()
        
    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Luxray</h5>
    <p className='contenedorParrafo'>tipo:Electrico</p>
</div>

);
}
export default Card4;