"use strict";

const arr = [22, 2, 3, 6, 8, 10 ];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr.pop();
// arr.push(10);

// console.log(arr);
// arr.forEach(function(item, i, arr){
//     console.log(`${i}:  ${item} внутри массива ${arr}`);
// }); 

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));