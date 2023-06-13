'use strict'
// Задание:
// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений.
// Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
// поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. 
// Если строка является панграммой - вернется true, если нет - false.

// Пример:
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello world») => false
// P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать.



// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}



// ---------------------------------------------------
const isPangram = (str) => {
    let count = 0;
    let rf = str.replace(/\s+/g , '');
    for (let i = 1; i <= rf.length; i++) {
        for (let j = 0; j <= generateAlphabets().toLowerCase().length; j++) {
            if (rf[i] == generateAlphabets().toLocaleLowerCase()[j]) {
                count++;
            };
        };
    };
    console.log(count);
    if (count >= generateAlphabets().length) {
        return true;
    } else {
        return false;
    };

};

const generateAlphabets = () => {
    let alphabets = [];
    let start = 'A'.charCodeAt(0);
    let last = 'Z'.charCodeAt(0);
    for (let i = start; i <= last; ++i) {
        alphabets.push(String.fromCharCode(i));
    };
    return alphabets.join('');
}; 

// console.log(count);
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('Hello world'));

// console.log('Hello world'.replace(/\s+/g , '').length);
console.log('The quick brown fox jumps over the lazy dog'.replace(/\s+/g , '').length);


