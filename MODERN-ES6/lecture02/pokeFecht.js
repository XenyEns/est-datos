'use strict';

export const pokeSearch = async (pokemonName) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
  const data = await response.json();
  return data;
};
