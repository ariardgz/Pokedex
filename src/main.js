
import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data["pokemon"][0]["name"]);
//const imagenPokemon = document.querySelector("src")
//imagenPokemon.innerHTML = data.pokemon[0].img;



//console.log(data.pokemon[2].name);
//elegir con un selector 

const nombrePokemon = document.querySelector("#nombrepokemon");
nombrePokemon.innerHTML=(data.pokemon[0].name);
//console.log(document.querySelector("#nombrepokemon"));

const descripcionPokemon = document.querySelector("#descripcionPokemon");
descripcionPokemon.innerHTML = (data.pokemon[0].about);

const tipoPokemon = document.querySelector("#tipoPokemon");
tipoPokemon.innerHTML = (data.pokemon[0].type[0]);





