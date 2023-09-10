/* */
//import Chart from 'chart.js/auto';
/* eslint-disable*/
import data from './data/pokemon/pokemon.js';
import {tiposDePokemonKanto} from './data.js'
import {tiposDePokemonJohto} from './data.js'
//const graphic = document.getElementById("myChard")
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

