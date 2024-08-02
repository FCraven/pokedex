import axios from 'axios';
import memoize from 'lodash.memoize';

const API_URL = 'https://pokeapi.co/api/v2/';

const fetchPokemonList = memoize(async () => {
  const response = await axios.get(`${API_URL}pokemon?limit=151`);
  return response.data.results;
});

const fetchPokemonDetails = memoize(async (name) => {
  const response = await axios.get(`${API_URL}pokemon/${name}`);
  return response.data;
});

export { fetchPokemonList, fetchPokemonDetails };
