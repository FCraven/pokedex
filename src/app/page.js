// src/app/page.js
'use client';

import { useEffect, useState } from 'react';
import PokemonTile from '../components/PokemonTile';

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonNames = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'jigglypuff','gyarados','sobble','magikarp','snorlax', 'meowth', 'mew','mewtwo','lucario','raichu','gengar','scorbunny','charmeleon', 'charmander','eevee','vulpix']; // Add more Pokémon names as needed
        const fetchedPokemon = await Promise.all(
          pokemonNames.map(async (name) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            return {
              name: data.name,
              image: data.sprites.other['official-artwork'].front_default,
              types: data.types.map((typeInfo) => typeInfo.type.name),
            };
          })
        );
        setPokemonList(fetchedPokemon);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-8">Welcome to the Pokédex</h1>
      <p className="mt-4 text-xl">Your ultimate Pokémon encyclopedia!</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {pokemonList.map((pokemon, index) => (
          <PokemonTile key={index} name={pokemon.name} image={pokemon.image} types={pokemon.types} />
        ))}
      </div>
      <p className="mt-8 text-lg">
        Dive into the world of Pokémon, discover new creatures, and add them to your collection!
      </p>
    </div>
  );
}
