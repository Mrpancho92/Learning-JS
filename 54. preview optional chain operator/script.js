'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

/* if (block) {
    console.log(block.textContent);
} */

// console.log(block?.textContent);
// block?.textContent = '123'; - будет ошибка

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('hello');
    }
}

userData.say();
userData.hey?.();
console.log(userData.skills?.js);

let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

console.log(myMap.get("foo")?.desc);
