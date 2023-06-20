/* const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log('ya sit');
} */

const hamburger =3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
console.log(!0);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport);
console.log(samReport);
console.log(alexReport);
console.log(johnReport || alexReport || samReport || mariaReport);

/* console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'fdgdfhdghdggfds');
console.log(1 && 'fdgdfhdghdggfds' && 0 && 5);

if (hamburger === 3 && cola === 1  && fries) {
    console.log('vse siti');
} else {
    console.log('mi uhodim');
} */


console.log(NaN || 2 || undefined );
console.log(NaN && 2 && undefined);
console.log( 1 && 2 && undefined);
console.log(!1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola || fries === 3 && nuggets){
    console.log('done');
    console.log( hamburger === 3 && cola || fries === 3 && nuggets);
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if ( hamburger || cola || fries === 3 || nuggets ) {
    console.log('done');
    console.log( hamburger || cola || fries === 3 || nuggets );
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
console.log(hamburger && cola);
/* console.log(typeof(hamburger && cola)); */
console.log(fries === 3 && nuggets);

if ( hamburger && cola || fries === 3 && nuggets ) {
    console.log('done');
    console.log(hamburger && cola || fries === 3 && nuggets);
}

 let num = 50;
/* while (num <= 55 ) {
    console.log(num);
    num++;
}  */


/* do {
    console.log(num);
    num++;
}
while (num < 55); */
/* 
for ( let i = 1; i < 8; i++){
   if (i===6) {
    //break;
    continue;
   }
    console.log(i);
}
 */

/* for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j); 
    }
} */

/* *
**
***
****
*****
****** */

/* let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
for (let j = 0; j < i; j++){
    result += "*";
}
    result += '\n';
}
console.log(result); */

let result = '';
const length = 7;

const mgh = "fff";

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

