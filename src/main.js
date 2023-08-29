import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

////////////////////FILTRADO POR NOMBRE
/*const result = [];
const buscarPokemon = document.querySelector('#pokemon');
const boton = document.querySelector('#botonSearch');

/*buscarPokemon.addEventListener("keyup", function(){this.value = this.value.toLowerCase()})
boton.addEventListener('click', searchPokemon);

for(let i = 0; i <= data.pokemon.length; i++){
  console.log(data.pokemon[i].name);
    
}


function searchPokemon(){
  ///limpiar la pagina
  console.log(buscarPokemon.value);
  /// buscar pokemon
  for(let i = 0; i <= result.length; i++){
    if(buscarPokemon.value = result[i]){
      const num = result.indexOf(i);
      console.log(num); 
    }
  }
}
*/




////////////////////////FILTRADO POR TIPO




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
  nombrepokemon.textContent = "Nombre:" + pokemon.name;
  pokemonDiv.appendChild(nombrepokemon);
 
  const numeropokemon =document.createElement("p");
  numeropokemon.textContent = "Numero:" + pokemon.num;
  pokemonDiv.appendChild(numeropokemon);
  
  const generacionpokemon = document.createElement("p");
  generacionpokemon.textContent = "Generación: " + pokemon.generation.name;
  pokemonDiv.appendChild(generacionpokemon);
  
  const tipopokemon = document.createElement("p");
  tipopokemon.textContent = "Tipo: " + pokemon.type.join(", ");
  pokemonDiv.appendChild(tipopokemon);
  
  const alturapokemon = document.createElement("p");
  alturapokemon.textContent = "Altura: " + pokemon.size.height;
  pokemonDiv.appendChild(alturapokemon);
  
  const pesopokemon = document.createElement("p");
  pesopokemon.textContent = "Peso: " + pokemon.size.weight;
  pokemonDiv.appendChild(pesopokemon);
  
  const descripcionpokemon = document.createElement("p");
  descripcionpokemon.textContent = "Descripción: " + pokemon.about;
  pokemonDiv.appendChild(descripcionpokemon);
  // Agrega más elementos aquí para otros detalles
  pokemonDetailsContainer.appendChild(pokemonDiv);

   
}
)
