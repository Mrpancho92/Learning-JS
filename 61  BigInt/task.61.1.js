'use strict'

// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
//         amountOfPages(5) => 5
//         amountOfPages(25) => 17
//         amountOfPages(1095) => 401   
//         amountOfPages(185) => 97

const amountOfPages = (number) => {
let str = '';
for ( let i = 1; i <= number; i++) {
str += i;
if (str.split('').length == number) {
return i;
} 
}; 
};  
console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));

let num = 1095;
let strr = '';
let count = 0;
for (let i = 1; i <= num; i++ ){
    strr += i;
    count++;
    if (strr.length == num) break; 
};
console.log(count);

// 1 2 3 4 5 6 7 8 9 10                        => 11
// 1 2 3 4 5 6 7 8 9 10 11                     => 13
// 1 2 3 4 5 6 7 8 9 10 11 12                  => 15 
// 1 2 3 4 5 6 7 8 9 10 11 12 13               => 17
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14            => 19
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15         => 21
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16      => 23
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17   => 25

var num = 123;
var sum = ('' + num).split('').reduce(function(sum, val) { 
    return +val;
}, 0);
console.log(sum);