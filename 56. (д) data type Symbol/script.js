'use strict';
const obj = {
    'name': 'Test'
}

let id = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2);

obj[id] = 1;

console.log(obj);

// ------------------------------------

const obj = {
    'name': 'Test',
    [Symbol('id')]: 1
}
console.log(obj);
// console.log(obj['id']);   - undefined

for (let value in obj) console.log(value);

// -------------------------------------

let id = Symbol("id");
const obj = {
    'name': 'Test',
      [id]: 1,
      getId: function() {
        return this[id];
      }
}
// console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// for (let value in obj) console.log(value);

// ----------------------------------------

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123
}
// Сторонний код библиотеки
myAwesomeDB.id = '1324245254';
console.log(myAwesomeDB["id"]);
console.log(myAwesomeDB); 

// -----------------------------------------

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123   // - делаем глобальным .for
}
// Сторонний код библиотеки
myAwesomeDB.id = '1324245254';
console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB); 