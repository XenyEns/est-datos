'use strict';
import { pokeSearch } from './pokeFecht.js';

async function callPokemon(data) {
  return await pokeSearch(data.toLowerCase());
}

const pokemon = await callPokemon('Pikachu');

console.log(pokemon);

const buscar = document.createElement('input');
const boton = document.createElement('button');
boton.textContent = 'Buscar Pokemon';

const p = document.createElement('p');
p.textContent = pokemon.name;

const main = document.getElementById('main');

const imgPokemon = document.createElement('img');
imgPokemon.src = pokemon.sprites.front_default;
imgPokemon.alt = pokemon.name;

main.append(buscar);
main.append(boton);
main.append(imgPokemon);
main.append(p);

async function saludar() {
  const res = await callPokemon(buscar.value);
  imgPokemon.src = res.sprites.front_default;
  p.textContent = res.name;
}

boton.onclick = saludar;
