'use strict';

/* 1) У карт ключи могут быть чем угодно массивы объекты функции цифры и тд, у объектов ключи могут быть только строки.
2) Порядок свойств в картах всегда такой в какой мы их добавляли это полезно при различных переборах, у объектов же нет четкого порядкка в зависимости от того когда это свойство было добавлено.
3) При создании пустой карты в ней ничего не будет содержаться в том числе и каких то наследуемых свойств через прототип а вот в пустом объекте они будут содержаться и могут быть проблемой если случайно их перезаписать.
4) Карты легко перебирать, с объектами не все так просто.
5) То что размер карты довольно легко получить через свойство size, если же мы смотрим на объект то там чтобы нам получить количество элементов внутри количество свойст или методов нам надо сначала объект трансформировать в массив и только потом получить его длину.  */

const user = {
    4: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);


const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);



console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50} 
];

const budget = [5000, 15000, 25000];

const map = new Map([[{paper: 400}, 8000]]);

shops.forEach((shop, i)=> {
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000)
//    .set(shops[1], 15000)
//    .set(shops[2], 25000);

console.log(map);
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys()
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
    
}
console.log(goods);


// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) {
//     console.log(price);
// }


// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

map.forEach((value, key, map) => {
    console.log(key, value);
});

