const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    // basis= basis || 2;
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(3); 



const log2 = function(...rest) {
    console.log(rest);
}

log2('basic', 'rest');