"use strict";

const arr = [2, 3, 6, 8, 10 ];

// arr.pop();
// arr.push(10);

// console.log(arr);
arr.forEach(function(item, i, arr){
    console.log(`${i}:  ${item} внутри массива ${arr}`);
});

