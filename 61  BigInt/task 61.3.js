'use strict'
// Задание:
// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

const deepCount = (array) => {
let countObj = 0;
let i = 0; 
count = array.length;   
if (array[i] == Object) {
countObj++;
} else {
    return deepCount();
}
} 

deepCount([1, 5, 3]);


// console.log(arr[2][2][0]);
const userMap = new Map(Object.entries(arr));
// console.log(userMap);
// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);
console.log(arr.length);
console.log((Object.keys(arr)));
userMap.forEach((value, key) => {
    console.log(key, value);
});


let g = [1, 2, [3, 4, [5]]];
console.log(Array.isArray(g[2]));

console.log(typeof g[0]);
console.log(typeof g[1]);
console.log(typeof g[2]);
if (g[2] instanceof Array) {
    console.log('fevvf');
};





let h = g + '';
console.log(h.split(',').join('').length);
console.log(typeof h);
`[${2}]` + `[${2}]]`;




const arr = [1, 2, [3, 4, [5]]];
function f1(item, level = 0){ 
    if (item instanceof Array){
        return (level > 0 ? 1 : 0) + item.map(function(value, index){
            return f1(value, level + 1)
        }).reduce((a, b) => a + b , 0)
    }
    return 0;
}

console.log(f1([1, 5, 3]));
console.log(f1(["1", 5, "3", ["10"]]));
console.log(f1([1, 2, [3, 4, [5]]]));
console.log(f1([]));
console.log(f1([[[[[[[[[]]]]]]]]]));