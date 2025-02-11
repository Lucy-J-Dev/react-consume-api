import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPokemonList(data.results);
  };

  useEffect(() => {
    try {
      fetchPokemon();
    } catch (error) {
      console.error("Error cargando los pokemon", error);
    }
  }, []);

  return (
    <>
      <h1>Lista de Pokemon</h1>
      {
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      }
    </>
  );
};

export default PokemonList;
