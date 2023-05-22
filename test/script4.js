function first() {
    setTimeout(function() {
        console.log(1);
    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    setTimeout(function() {
        console.log('Я сделал это');
    }, 1000);
    console.log('Я прошел этот урок!');
}

/* learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
}); */

learnJS('JavaScript', done); 