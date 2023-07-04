'use strict';
// До появления JSON использовался язык xml.

// В формате JSON выглядит так: {"name":"Alex","tel":"+744444444"} 

// В формате xml выглядит код так:
// <?xml version="1.0" encoding="UTF-8" ?>
// <root>
//   <name>Alex</name>
//   <tel>+744444444</tel>
// </root>

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);



// Сделаем глубокую копию

 