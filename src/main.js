import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.pokemon[0].name);
//elegir con un selector 
const nombrepokemon = document.querySelector("#nombrepokemon");
nombrepokemon.innerHTML=(data.pokemon[0].name);
console.log(document.querySelector("#nombrepokemon"));


