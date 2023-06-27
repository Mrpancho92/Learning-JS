'use strict';
// 1) Обычная функция: this = window, но если use strict - undefined.
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);

//----------------------------------------------
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();

//----------------------------------------------
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" +' '+ this.name);
    }
}
let ivan = new User('Ivan', 23);
ivan.hello();

//----------------------------------------------
// Чтобы добавить контекст вызова this в функцию нужно использовать методы call или apply. "Smith" - это дополнительный аргумент который мы можем передать в фунцию.
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};
sayName.call(user, 'Smith');    // Разница в синтаксисе
sayName.apply(user, ['Smith']); // Разница в синтаксисе

// ---------------------------------------------
//double это новая функция к которой жестко привязан контекст вызова с помощью bind.
//bind создает уже новую функцию связанную с определенным контекстом
function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));

//----------------------------------------------
//Контекст вызова this и обработчик событий: 
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

//---------------------------------------------
//Этот вариант как переписать со стрелочной функцией без контекста вызова this, используя   e.target:
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

// --------------------------------------------
// В данном случае использую стрелочную функцию "say" у неё нет собственного контекста вызова она берет контекст вызова у своего родителя (родительской фунции)
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
         say();
    }
};
obj.sayNumber();

//---------------------------------------------
// Классический вариант написания
const double = (a) => {
    return a * 2;
};

//Если действие умещается в одну строчку то мы можем опустить скобки и убрать слово return т.к. оно подставится автоматически, и ещё если у нас стрелочная функция принимает только один аргумент то мы можем опустить круглые скобки возле него:
const double = a => a * 2;
console.log(double(4));

//если уже 2 аргумента то круглые скобки необходимы:
const double = (a, b) => a * b * 2;
console.log(double(4, 4));