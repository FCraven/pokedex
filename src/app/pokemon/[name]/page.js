
import { notFound } from 'next/navigation';
import PokemonCard from '../../../components/PokemonCard';

async function fetchPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return {
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
    types: data.types.map((typeInfo) => typeInfo.type.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((statInfo) => ({
      name: statInfo.stat.name,
      value: statInfo.base_stat,
    })),
    abilities: data.abilities.map((abilityInfo) => abilityInfo.ability.name),
  };
}

export default async function PokemonPage({ params }) {
  const { name } = params;
  const pokemon = await fetchPokemonData(name);

  if (!pokemon) {
    notFound();
  }

  return (
    <div className="text-center">
      <PokemonCard
        name={pokemon.name}
        image={pokemon.image}
        types={pokemon.types}
        height={pokemon.height}
        weight={pokemon.weight}
        stats={pokemon.stats}
        abilities={pokemon.abilities}
      />
    </div>
  );
}
