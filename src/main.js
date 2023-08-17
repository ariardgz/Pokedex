import { Linter } from 'eslint';
import { example } from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data["pokemon"][0]["name"]);
const imagenPokemon = data.pokemon[1].img;
document.getElementById("#imagenPokemon.src") = imagenPokemon;