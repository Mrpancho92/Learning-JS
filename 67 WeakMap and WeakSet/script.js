'use strict';

/* let user = {name: 'Ivan'};
const arr = [user];
user = null;
console.log(user);
console.log(arr[0]); */

// ---------------------------------------

/* let user = {name: 'Ivan'};
let map = new Map();
map.set(user, 'data');
user = null;
console.log(map.keys()); */

// ---------------------------------------

let user = {name: 'Ivan'};
let map = new WeakMap();  //- ключами могут быть только объекты, если нет ссылки на этот объект и он сущ только внутри weakmap то он будет удален из это слабой карты
//доступно set, get, delete, has
map.set(user, 'data');
user = null;
console.log(map.has(user));


// ----------------------------------------

/* let cache = new WeakMap();
function cahcheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}
let lena = {name: 'Elena'};
let alex = {name: 'Alex'};
cahcheUser(lena);
cahcheUser(alex);
lena = null;
console.log(cache.has(lena));
console.log(cache.has(alex)); 

------>  WeakSet имеет add, has, delete */

// let messages = [
//     {text: 'hello', from: 'Jahn'},
//     {text: 'hello', from: 'Alex'},
//     {text: '....', from: 'M'},
// ];
// let readMessages = new WeakSet();
// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);
// readMessages.add(messages[0]);
// messages.shift();
// console.log(readMessages.has(messages[0]));
// console.log(messages[0]);