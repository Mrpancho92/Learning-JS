'use strict'
console.log(Number.MAX_SAFE_INTEGER);
// const bigint = 12312143242545345324254353645646546455345345346334653n;

const sameBigint = BigInt(12312143242545345324254353645646546455345345346334653);
console.log(typeof(bigint));

// 1) BigInt нельзя использовать с методами со встроенным объектом math, math.round, math.raduan
// 2) Нельзя смешивать в операциях BigInt и обычные числа

console.log(5n + 1);  // - ошибка будет 
console.log(Math.round(5n));  // - ошибка будет 
console.log(1n + 2n);
console.log(5n / 2n);  // - операция деление будет возвращать всегда округленный результат
console.log(2n > 5 ); 
console.log(2n === 2);
console.log(2n == 2);

let bigint = 1n;
let number = 2;
console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);






