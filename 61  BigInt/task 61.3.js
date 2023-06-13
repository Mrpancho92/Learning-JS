'use strict'
// Задание:
// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));




/* 
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




const g = [1,[],3];
let h = g + '';
let count = 0;
/* for(let i = 0; i <= h.length; i++) {
    if (h[i] == ',') {
        count++;
    };
} 

console.log(Array.isArray(g[1]));
console.log(typeof h);
`[${2}]` + `[${2}]]`;




function f2(arr) {
    let count1 = 0;
    let count2 = 0;
    arr = arr + '';
for(let i = 0; i <= arr.length; i++) {
    if (arr[i] == ',') {
        count1++;
    };
    if (!arr[i]) {
        count2++;  
    };
}; 
console.log(count2 + '/p');
if (count2 > 0) {
    return count1 - count2;
} else {
    return count1 + 1;
}
};

function f1(item, level = 0) {  
    if (item instanceof Array){
        return (level > 0 ? 1 : 0) + item.map(function(value, index){
            return f1(value, level + 1)
        }).reduce((a, b) => a + b , 0)
    }

    return 0;
}

console.log(f1([1, 5, 3]) + f2([1, 5, 3]));
console.log(f1(["1", 5, "3", ["10"]]) + f2(["1", 5, "3", ["10"]]) );
console.log(f1([1, 2, [3, 4, [5]]]) + f2([1, 2, [3, 4, [5]]]));
console.log(f1([]) + f2([]));
console.log(f1([[[[[[[[[]]]]]]]]]) + f2([[[[[[[[[]]]]]]]]]));




function deep(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) count += deep(a[i]);
    return count;
}
console.log(deep(["1", 5, "3", ["10"]]));
console.log([1, 2, [3, 4, [5]]].length);



console.log([1, 2, [3, 4, [5]]].reduce((s,e)=>s+(Array.isArray(e) ? 1 : 0),[1, 2, [3, 4, [5]]].length));

const getMax = (a, b) => b+a;

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 1)); // 100
 */