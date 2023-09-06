//import Chart from 'chart.js/auto';
import data from './data/pokemon/pokemon.js';

//const graphic = document.getElementById("myChard")

const tiposPoke = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark",
  "dragon", "steel", "fairy"];
//const tiposPoke = ["grass"];
//const kantograss = []
const obj = []
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

  console.log(pokemonKantoTipos);
  obj[tiposPoke[i]] = pokemonKantoTipos;
  console.log(pokemonJohtoTipos);
  obj2[tiposPoke[i]] = pokemonJohtoTipos;
}
console.log(obj);
console.log(obj2);
console.log(tiposPoke)

const barColor = "#705898"

const xKantoValue = Object.keys(obj);
const yKantoValue = Object.values(obj);

const myChard = new Chart("myChart", {
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
      text: 'Estadítica Pokemon #1 Kanto'
    }

  }
}
);

const xJohtoValue = Object.keys(obj2);
const yJohtoValue = Object.values(obj2);

const myChart2 = new Chart("myChartJohto", {
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
      text: 'Estadítica Pokemon #2 Johto'
    }

  }
}
)

