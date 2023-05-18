if (4==9) {
    console.log('ok!');
} else {
    console.log('error!');
}

const num = 50;
if (num < 49)  {
    console.log('eroor!');
} else if (num > 100) {
    console.log('mnogo');
} else {
    console.log('ok!');
}

(num === 50) ? console.log('ok') : console.log('error');

const num = 50;
switch (num) {
case 49: 
console.log('neverno');
break;
case 100: 
console.log('neverno');
break;
case 80: 
console.log('pravda');
break;
default:
    console.log('ne v etot raz');
    break;
}