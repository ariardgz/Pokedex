import { filterByType, tiposDePokemonKanto, tiposDePokemonJohto, } from '../src/data.js';
import { filterByAZ } from '../src/data.js';


describe('filterByType ', () => {
  // existe
  it('deberia ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });
  // comportamiento deseado
  it('returns `example`', () => {
    const botonID = "dark";
    const data = {
      "pokemon": [
        { "name": "wartortle", "type": "dark" },
        { "name": "pikachu", "type": "electric" },
        { "name": "blastoise", "type": "water" }
      ]
    }
    expect(filterByType(data, botonID)).toEqual([{ "name": "wartortle", "type": "dark" }]);
  });
  // estresar al test (AAA)
  it('estresar', () => {
    const botonID = "";
    const data = {
      "pokemon": [
        { "name": "wartortle", "type": "dark" },
        { "name": "pikachu", "type": "electric" },
        { "name": "blastoise", "type": "water" }
      ]
    }
    expect(filterByType(data, botonID)).toBeFalsy()

  })
});

describe('filterByAZ', () => {
  it('is a function', () => {
    expect(typeof filterByAZ).toBe('function');
  });
  //comportamiento deseado 
  it('returns `ordercards`', () => {
    const data = {
      "pokemon": [
        { "name": "wartortle"},
        { "name": "pikachu"},
        { "name": "blastoise"}
      ]
    }
    expect(filterByAZ(data)).toEqual( [{"name": "blastoise"}, { "name": "pikachu"}, {"name": "wartortle"}]);
  });
});

describe('tiposDePokemonKanto', () => {
  it('is a function', () => {
    expect(typeof tiposDePokemonKanto).toBe('function');
  });

  it('returns `anotherExample`', () => {
    const tiposPoke = "ghost";
    const data = {
      "pokemon": [
        { "name": "spinarak", "generation": { "name": "johto" }, "type": "bug" },
        { "name": "haunter", "generation": { "name": "kanto" }, "type": "ghost" },
        { "name": "ledian", "generation": { "name": "johto" }, "type": "bug" }]
    }
    expect(tiposDePokemonKanto(data, tiposPoke)).toEqual([{"name": "haunter", "generation": { "name": "kanto"},  "type": "ghost"}]);
  });

  it('Deberia de obtener todos los pokemon de kanto', () => {
    
    const data = {
      "pokemon": [
        { "name": "spinarak", "generation": { "name": "johto" }, "type": "bug" },
        { "name": "haunter", "generation": { "name": "kanto" }, "type": "ghost" },
        { "name": "pikachu", "generation": { "name": "kanto" }, "type": "ghost" },
        { "name": "ledian", "generation": { "name": "johto" }, "type": "bug" }]
    }
    expect(tiposDePokemonKanto(data)).toEqual({"bug": 0, "dark": 0, "dragon": 0, "electric": 0, "fairy": 0, "fighting": 0, "fire": 0, "flying": 0, "ghost": 2, "grass": 0, "ground": 0, "ice": 0, "normal": 0, "poison": 0, "psychic": 0, "rock": 0, "steel": 0, "water": 0});
  });
});

describe('tiposDePokemonJohto', () => {
  it('is a function', () => {
    expect(typeof tiposDePokemonJohto).toBe('function');
  });

  it('returns `anotherExample`', () => {
    const tiposPoke = "psychic";
    const data = {
      "pokemon": [
        { "name": "wobbuffet", "generation": { "name": "johto" }, "type": "psychic" },
        { "name": "haunter", "generation": { "name": "kanto" }, "type": "ghost" },
        { "name": "ledian", "generation": { "name": "johto" }, "type": "bug" }]
    }
    expect(tiposDePokemonJohto(data, tiposPoke)).toEqual([{ "name": "wobbuffet", "generation": { "name": "johto" }, "type": "psychic" }]);
  });
});
