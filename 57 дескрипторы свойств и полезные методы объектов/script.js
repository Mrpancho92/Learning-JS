'use strict';

const birthday = Symbol('birthday');
 
const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    //birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// ---------------------------------------------------------
/* console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {writable: false});
Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender')); 
Когда мы в ручную создаем какой либо объект то изначально у него все свойства их флаги будут true, а если мы создаем свойство с помощью defineProperty то изначально все флаги будут false.
*/

// ----------------------------------------------------------
/* Object.defineProperty(user, 'birthday', {writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
user.birthday = 'fdgdfghd'; */ 
// ----------------------------------------------------------
/* Object.defineProperty(user, 'birthday', {value: '09.04.1992', enumerable: true, configurable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
for (let key in user) console.log(key); */
// ----------------------------------------------------------
/* Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let key in user) console.log(key); */
// ----------------------------------------------------------
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// ----------------------------------------------------------
/* Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
}); */
// ----------------------------------------------------------
for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));
// ----------------------------------------------------------
/* Объекты не равны даже если равное содержимое
Object.is() - позволяет сравнивать  */
// ----------------------------------------------------------







// writable  - если этот параметр будет стоять в позиции true то свойство в объекте можно будет изменить, если false то будет только для чтения.

// enumerable - если это флаг стоит true то свойство будет перечисляться в циклах если нет то циклы будут его игнорировать.

// configurable - если тут true то свойство можно будет удалить а атрибуты его можно будет изменить а иначе сделать это будет нельзя.

