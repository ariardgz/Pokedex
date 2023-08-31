import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

////////////////////FILTRADO POR NOMBRE

const buscarPokemon = document.querySelector('#pokemon');
const boton = document.querySelector('#botonSearch');

buscarPokemon.addEventListener("keyup", function () { this.value = this.value.toLowerCase() })
boton.addEventListener('click', searchPokemon);

function searchPokemon() {
  let contador = 0;
  /// buscar pokemon
  for (let i = 0; i < data.pokemon.length; i++) {

    if (buscarPokemon.value === data.pokemon[i].name) {
      pokemonDetailsContainer.innerHTML = ""; // Limpiar detalles anteriores

      contador = contador + 1;
      const pokemonDiv = document.createElement("div");
      pokemonDiv.classList.add('card');
      const imagenPokemon = document.createElement("img");
      imagenPokemon.src = data.pokemon[i].img;
      imagenPokemon.alt = data.pokemon[i].name;
      imagenPokemon.classList.add("img")
      pokemonDiv.appendChild(imagenPokemon);

      const nombrepokemon = document.createElement("h2");
      nombrepokemon.textContent = "Name: " + data.pokemon[i].name;
      pokemonDiv.appendChild(nombrepokemon);

      const numeropokemon = document.createElement("p");
      numeropokemon.textContent = "#" + data.pokemon[i].num;
      pokemonDiv.appendChild(numeropokemon);

      const generacionpokemon = document.createElement("p");
      generacionpokemon.textContent = "Generation: " + data.pokemon[i].generation.name;
      pokemonDiv.appendChild(generacionpokemon);

      const tipopokemon = document.createElement("p");
      tipopokemon.textContent = "Type: " + data.pokemon[i].type.join(", ");
      pokemonDiv.appendChild(tipopokemon);

      const alturapokemon = document.createElement("p");
      alturapokemon.textContent = "Height: " + data.pokemon[i].size.height;
      pokemonDiv.appendChild(alturapokemon);

      const pesopokemon = document.createElement("p");
      pesopokemon.textContent = "Weight: " + data.pokemon[i].size.weight;
      pokemonDiv.appendChild(pesopokemon);

      const descripcionpokemon = document.createElement("p");
      descripcionpokemon.textContent = "About: " + data.pokemon[i].about;
      pokemonDiv.appendChild(descripcionpokemon);
      // Agrega más elementos aquí para otros detalles
      pokemonDetailsContainer.appendChild(pokemonDiv);

    } else if (contador === 0) {
    // Mostrar mensaje si no se encontró el Pokémon
      pokemonDetailsContainer.innerHTML = "Pokémon no encontrado";
    }

  }
}


////////////////////////FILTRADO POR TIPO
const botones = document.querySelectorAll(".btn-header");
botones.forEach(boton => boton.addEventListener('click', (event) =>{ 
  const botonID = event.currentTarget.id;
  pokemonDetailsContainer.innerHTML = "";
  
  const tipoNormal = [];
  const tipoFire = [];
  const tipoWater = [];
  const tipoGrass = [];
  const tipoElectric = [];
  const tipoIce = [];
  const tipoFighting = [];
  const tipoPoison = [];
  const tipoGround = [];
  const tipoFlying = [];
  const tipoPsychic = [];
  const tipoBug = [];
  const tipoRock = [];
  const tipoGhost = [];
  const tipoDark = [];
  const tipoDragon = [];
  const tipoSteel = [];
  const tipoFairy = [];

  console.log(botonID);

  for(let i= 0; i < data.pokemon.length; i++){
    const tipoPokemon = data.pokemon[i].type[0];
    if(tipoPokemon === 'fire'){
      tipoFire.push(data.pokemon[i]);
    } else if (tipoPokemon === 'normal'){
      tipoNormal.push(data.pokemon[i]);
    } else if (tipoPokemon === 'water'){
      tipoWater.push(data.pokemon[i]);
    } else if (tipoPokemon === 'grass'){
      tipoGrass.push(data.pokemon[i]);
    } else if (tipoPokemon === 'electric'){
      tipoElectric.push(data.pokemon[i]);
    } else if (tipoPokemon === 'ice'){
      tipoIce.push(data.pokemon[i]);
    } else if (tipoPokemon === 'fighting'){
      tipoFighting.push(data.pokemon[i]);
    } else if (tipoPokemon === 'poison'){
      tipoPoison.push(data.pokemon[i]);
    } else if (tipoPokemon === 'ground'){
      tipoGround.push(data.pokemon[i]);
    } else if (tipoPokemon === 'flying'){
      tipoFlying.push(data.pokemon[i]);
    } else if (tipoPokemon === 'psychic'){
      tipoPsychic.push(data.pokemon[i]);
    } else if (tipoPokemon === 'bug'){
      tipoBug.push(data.pokemon[i]);
    } else if (tipoPokemon === 'rock'){
      tipoRock.push(data.pokemon[i]);
    } else if (tipoPokemon === 'ghost'){
      tipoGhost.push(data.pokemon[i]);
    } else if (tipoPokemon === 'dark'){
      tipoDark.push(data.pokemon[i]);
    } else if (tipoPokemon === 'dragon'){
      tipoDragon.push(data.pokemon[i]);
    } else if (tipoPokemon === 'steel'){
      tipoSteel.push(data.pokemon[i]);
    } else if (tipoPokemon === 'fairy'){
      tipoFairy.push(data.pokemon[i]);
    } 
  
  }  
  if(botonID === "fire"){
    tipoFire.forEach((pokemon) => {
      const pokemonDiv = document.createElement("div");
      pokemonDiv.classList.add('card');
      const imagenPokemon = document.createElement("img");
      imagenPokemon.src = pokemon.img;
      imagenPokemon.alt = pokemon.name;
      imagenPokemon.classList.add("img")
      pokemonDiv.appendChild(imagenPokemon);
    
      const nombrepokemon = document.createElement("h2");
      nombrepokemon.textContent = "Name: " + pokemon.name;
      pokemonDiv.appendChild(nombrepokemon);
    
      const numeropokemon = document.createElement("p");
      numeropokemon.textContent = "#" + pokemon.num;
      pokemonDiv.appendChild(numeropokemon);
    
      const generacionpokemon = document.createElement("p");
      generacionpokemon.textContent = "Generation: " + pokemon.generation.name;
      pokemonDiv.appendChild(generacionpokemon);
    
      const tipopokemon = document.createElement("p");
      tipopokemon.textContent = "Type: " + pokemon.type.join(", ");
      pokemonDiv.appendChild(tipopokemon);
    
      const alturapokemon = document.createElement("p");
      alturapokemon.textContent = "Height: " + pokemon.size.height;
      pokemonDiv.appendChild(alturapokemon);
    
      const pesopokemon = document.createElement("p");
      pesopokemon.textContent = "Weight: " + pokemon.size.weight;
      pokemonDiv.appendChild(pesopokemon);
    
      const descripcionpokemon = document.createElement("p");
      descripcionpokemon.textContent = "About: " + pokemon.about;
      pokemonDiv.appendChild(descripcionpokemon);
      // Agrega más elementos aquí para otros detalles
      pokemonDetailsContainer.appendChild(pokemonDiv);
    
    
    })
  }
  
 


  
}))

const pokemonDetailsContainer = document.querySelector("#pokemon-details");
data.pokemon.forEach((pokemon) => {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add('card');
  const imagenPokemon = document.createElement("img");
  imagenPokemon.src = pokemon.img;
  imagenPokemon.alt = pokemon.name;
  imagenPokemon.classList.add("img")
  pokemonDiv.appendChild(imagenPokemon);

  const nombrepokemon = document.createElement("h2");
  nombrepokemon.textContent = "Name: " + pokemon.name;
  pokemonDiv.appendChild(nombrepokemon);

  const numeropokemon = document.createElement("p");
  numeropokemon.textContent = "#" + pokemon.num;
  pokemonDiv.appendChild(numeropokemon);

  const generacionpokemon = document.createElement("p");
  generacionpokemon.textContent = "Generation: " + pokemon.generation.name;
  pokemonDiv.appendChild(generacionpokemon);

  const tipopokemon = document.createElement("p");
  tipopokemon.textContent = "Type: " + pokemon.type.join(", ");
  pokemonDiv.appendChild(tipopokemon);

  const alturapokemon = document.createElement("p");
  alturapokemon.textContent = "Height: " + pokemon.size.height;
  pokemonDiv.appendChild(alturapokemon);

  const pesopokemon = document.createElement("p");
  pesopokemon.textContent = "Weight: " + pokemon.size.weight;
  pokemonDiv.appendChild(pesopokemon);

  const descripcionpokemon = document.createElement("p");
  descripcionpokemon.textContent = "About: " + pokemon.about;
  pokemonDiv.appendChild(descripcionpokemon);
  // Agrega más elementos aquí para otros detalles
  pokemonDetailsContainer.appendChild(pokemonDiv);


})

