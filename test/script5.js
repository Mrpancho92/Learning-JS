"use strict";
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }, makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

const {border, bg} = options.colors;
console.log(bg);
//console.log(options['colors']['border']);
/* console.log(options.name);
delete options.name; 
console.log(options); */
//-------------------------------------------------------
/* for ( let key in options ) {
    console.log(`свойство ${key} имеет значение ${options[key]}`)
}  */
//-------------------------------------------------------
/* let counter = 0;
for ( let key in options ) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
            counter++;   
        }
    } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
    counter++;
    }
} 
console.log(counter); */
//--------------------------------------------------------------
/* console.log(Object.keys(options).length); */
