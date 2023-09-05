import { filterByType } from '../src/data.js';
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
    // console.log(filterByType(data, botonID));
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
    // console.log(filterByType(data, botonID));
    expect(filterByType(data, botonID)).toBe(false)
    expect(filterByType(data, botonID)).toBeFalsy()

  })
});


describe('filterByAZ', () => {
  it('is a function', () => {
    expect(typeof filterByAZ).toBe('function');
  });

  //it('returns `anotherExample`', () => {
  //expect(anotherExample()).toBe('OMG');
  //});
});
