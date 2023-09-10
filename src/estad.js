/* */
//import Chart from 'chart.js/auto';
/* eslint-disable*/
import data from './data/pokemon/pokemon.js';
import {tiposDePokemonKanto} from './data.js'
import {tiposDePokemonJohto} from './data.js'
//const graphic = document.getElementById("myChard")

const tiposPoke = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark",
  "dragon", "steel", "fairy"];
//const tiposPoke = ["grass"];
//const kantograss = []
const obj = {}
const obj2 = {}
for (let i = 0; i < tiposPoke.length; i++) {

  // console.log(tiposPoke[i], data.pokemon);
  const pokemonKantoTipos = data.pokemon.filter(pokemon => {
    if (pokemon.type.includes(tiposPoke[i]) && pokemon.generation.name.includes('kanto')) {
      return pokemon;
    }
  }).length;
  const pokemonJohtoTipos = data.pokemon.filter(pokemon => {
    if (pokemon.type.includes(tiposPoke[i]) && pokemon.generation.name.includes('johto')) {
      return pokemon;
    }
  }).length;


  obj[tiposPoke[i]] = pokemonKantoTipos;
  
  obj2[tiposPoke[i]] = pokemonJohtoTipos;
}

console.log(obj);
console.log(tiposDePokemonKanto(data));
const barColor = "#705898"

const xKantoValue = Object.keys(tiposDePokemonKanto(data));
const yKantoValue = Object.values(tiposDePokemonKanto(data));

new Chart("myChart", {
  type: 'bar',
  data: {
    labels: xKantoValue,
    datasets: [{
      data: yKantoValue,
      backgroundColor: barColor,
    }]

  },
  options: {
    legend: {display: false},
    title:{
      display: true,
      text: 'Pokemon Statistics #1 Kanto'
    }

  }
}
);

const xJohtoValue = Object.keys(tiposDePokemonJohto(data));
const yJohtoValue = Object.values(tiposDePokemonJohto(data));

new Chart("myChartJohto", {
  type: 'bar',
  data: {
    labels: xJohtoValue,
    datasets: [{
      data: yJohtoValue,
      backgroundColor: barColor,
    }]

  },
  options: {
    legend: {display: false},
    title:{
      display: true,
      text: 'Pokemon Statistics #2 Johto'
    }

  }
}
)

