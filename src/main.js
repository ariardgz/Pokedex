import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

////////////////////FILTRADO POR NOMBRE
const buscarPokemon = document.querySelector('#pokemon');
const boton = document.querySelector('#botonSearch');

buscarPokemon.addEventListener("keyup", function(){this.value = this.value.toLowerCase()})
boton.addEventListener('click', searchPokemon);

function searchPokemon(){
  let contador = 0;
  /// buscar pokemon
  for(let i = 0; i < data.pokemon.length; i++){ 

    if(buscarPokemon.value === data.pokemon[i].name){
      pokemonDetailsContainer.innerHTML = ""; // Limpiar detalles anteriores

      contador = contador + 1;
      const pokemonDiv = document.createElement ("div");
      pokemonDiv.classList.add('card');
      const imagenPokemon = document.createElement("img");
      imagenPokemon.src = data.pokemon[i].img;
      imagenPokemon.alt = data.pokemon[i].name;
      imagenPokemon.classList.add("img")
      pokemonDiv.appendChild(imagenPokemon);
            
      const nombrepokemon =document.createElement("h2");
      nombrepokemon.textContent = "Name: " + data.pokemon[i].name;
      pokemonDiv.appendChild(nombrepokemon);
           
      const numeropokemon =document.createElement("p");
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
          
    } else if(contador === 0){
    // Mostrar mensaje si no se encontró el Pokémon
      pokemonDetailsContainer.innerHTML = "Pokémon no encontrado";
    }
   
  }
}





////////////////////////FILTRADO POR TIPO
/*const botones = document.querySelectorAll(".btn-header");
botones.forEach(boton => boton.addEventListener('click', (event) => {
  const botonID = event.currentTarget.id;
  const tipoPoke = [];

  for(let i = 0; i <= data.pokemon.length; i++){
    console.log(data.pokemon[i].type.map(function (obj){
      tipoPoke.push(this.type); }))
  }
})) */


const pokemonDetailsContainer = document.querySelector("#pokemon-details");
data.pokemon.forEach((pokemon) =>{
  const pokemonDiv = document.createElement ("div");
  pokemonDiv.classList.add('card');
  
  const imagenPokemon = document.createElement("img");
  imagenPokemon.src = pokemon.img;
  imagenPokemon.alt = pokemon.name;
  imagenPokemon.classList.add("img")
  pokemonDiv.appendChild(imagenPokemon);
  
  const nombrepokemon =document.createElement("h2");
  nombrepokemon.textContent = "Name: " + pokemon.name;
  pokemonDiv.appendChild(nombrepokemon);
 
  const numeropokemon =document.createElement("p");
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
