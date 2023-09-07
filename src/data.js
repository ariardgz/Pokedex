// estas funciones son de ejemplo
// export const example = (data) => {
//   //BUSCAR POKEMON
//   let contador = 0;
//   for (let i = 0; i < data.pokemon.length; i++) {

//     if (buscarPokemon.value === data.pokemon[i].name) {
//       pokemonDetailsContainer.innerHTML = ""; // Limpiar detalles anteriores

//       contador = contador + 1;
//       const pokemonDiv = document.createElement("div");
//       pokemonDiv.classList.add('card');
//       const imagenPokemon = document.createElement("img");
//       imagenPokemon.src = data.pokemon[i].img;
//       imagenPokemon.alt = data.pokemon[i].name;
//       imagenPokemon.classList.add("img")
//       pokemonDiv.appendChild(imagenPokemon);

//       const nombrepokemon = document.createElement("h2");
//       nombrepokemon.textContent = "Name: " + data.pokemon[i].name;
//       pokemonDiv.appendChild(nombrepokemon);

//       const numeropokemon = document.createElement("p");
//       numeropokemon.textContent = "#" + data.pokemon[i].num;
//       pokemonDiv.appendChild(numeropokemon);

//       const generacionpokemon = document.createElement("p");
//       generacionpokemon.textContent = "Generation: " + data.pokemon[i].generation.name;
//       pokemonDiv.appendChild(generacionpokemon);

//       const tipopokemon = document.createElement("p");
//       tipopokemon.textContent = "Type: " + data.pokemon[i].type.join(", ");
//       pokemonDiv.appendChild(tipopokemon);

//       const alturapokemon = document.createElement("p");
//       alturapokemon.textContent = "Height: " + data.pokemon[i].size.height;
//       pokemonDiv.appendChild(alturapokemon);

//       const pesopokemon = document.createElement("p");
//       pesopokemon.textContent = "Weight: " + data.pokemon[i].size.weight;
//       pokemonDiv.appendChild(pesopokemon);

//       const descripcionpokemon = document.createElement("p");
//       descripcionpokemon.textContent = "About: " + data.pokemon[i].about;
//       pokemonDiv.appendChild(descripcionpokemon);
//       // Agrega más elementos aquí para otros detalles
//       pokemonDetailsContainer.appendChild(pokemonDiv);

//     } else if (contador === 0) {
//       // Mostrar mensaje si no se encontró el Pokémon
//       pokemonDetailsContainer.innerHTML = "Pokémon no encontrado";
//     }

//   }
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const filterByType = (data, botonID) => { // parametros
  if (botonID === '') {
    return false
  }
  return data.pokemon.filter(pokemon => pokemon.type.includes(botonID));

}

export const filterByAZ = (data) => { // parametros

  return data.pokemon.filter(pokemon => pokemon.name).sort((a, b) => (a.name > b.name ? 1 : -1));

}


export const tiposDePokemonKanto = (data, tiposPokemon) => {
  const obj = {}
  if (tiposPokemon) {
    return data.pokemon.filter((pokemon) => {
      if (pokemon.type.includes(tiposPokemon) && pokemon.generation.name.includes('kanto')) {
        return pokemon;
      }
    })

  }
  const tiposPoke = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"];
  tiposPoke.forEach(tipo => {

    obj[tipo] = data.pokemon.filter((pokemon) => {
      if (pokemon.type.includes(tipo) && pokemon.generation.name.includes('kanto')) {
        return pokemon;
      }
    }).length
  })

  return obj
}

export const tiposDePokemonJohto = (data, tiposPokemon) => {
  const obj2 = {}
  if (tiposPokemon) {
    return data.pokemon.filter(pokemon => {
      if (pokemon.type.includes(tiposPokemon) && pokemon.generation.name.includes('johto')) {
        return pokemon;
      }
    })

  }

  const tiposPoke = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"];
  tiposPoke.forEach(tipo => {

    obj2[tipo] = data.pokemon.filter((pokemon) => {
      if (pokemon.type.includes(tipo) && pokemon.generation.name.includes('johto')) {
        return pokemon;
      }
    }).length
  })

  return obj2
}

