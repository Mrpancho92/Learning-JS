const a = {
    v: 5,
    m: function () {
        this.v = 10;

}
};
// a.v = 11;
a.m();
console.log(a.v);


console.log(parseInt("a123",)); 

let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN;

let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}

console.log((Boolean('0')));
console.log(typeof(!!"44444"));


function createCounter() { 
    let con = {
        counter: 0
    }

    const myFunction = function() {
        con.counter = con.counter + 1;
        return con.counter;
    }
    return myFunction;
}
const increment = createCounter(); 
const c1 = increment(); 
const c2 = increment(); 
const c3 = increment(); 
console.log(c1, c2, c3);

