
//import { example } from './data.js';


// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data["pokemon"][0]["name"]);
//const imagenPokemon = document.querySelector("src")
//imagenPokemon.innerHTML = data.pokemon[0].img;



//console.log(data.pokemon[2].name);
//elegir con un selector 

const nombrePokemon = document.querySelector("#nombrePokemon");
nombrePokemon.innerHTML=(data.pokemon[0].name);
//console.log(document.querySelector("#nombrepokemon"));

const descripcionPokemon = document.querySelector("#descripcionPokemon");
descripcionPokemon.innerHTML = (data.pokemon[0].about);

const tipoPokemon = document.querySelector("#tipoPokemon");
tipoPokemon.innerHTML = (data.pokemon[0].type[0]);

const numeroPokemon = document.querySelector("#numeroPokemon");
numeroPokemon.innerHTML = (data.pokemon[0].num);

const imagenPokemon = document.getElementById("imagenPokemon").src;
imagenPokemon.innerHTML = (data.pokemon[0].img);






