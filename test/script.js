'use strict';


let numberOfFilms;
/* star: for ( let j = 0; j < 10 ; j++ ) {
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms === null || numberOfFilms === '' /* || numberOfFilms.length >=5 */  /* ) {
    continue star;
} else break;
} */

function start()  {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/* const a = prompt('Один из последних просмотренных фильмоы?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмоы?', ''),
      d = prompt('На сколько оцените его?',''); */

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */


// -------------------НАПИСАНО ЦИЛОМ FOR -------------------

/*  for (let i = 0; i < 2; i++) {
    console.log(i);
    const a = prompt('Один из последних просмотренных фильмоы?', ''),
          b = prompt('На сколько оцените его?','');
          if ( a !=null && b !=null && a !='' && b !='' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
          }
}  */   

// -------------------НАПИСАНО ЦИЛОМ DO WHILE ------------------- 
/* let i = 0;
do {
    console.log(i);
    const a = prompt('Один из последних просмотренных фильмоы?', ''),
          b = prompt('На сколько оцените его?','');
          i++;
          if ( a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
        }
    }
while ( i < 2 );  */ 
            
 // -------------------НАПИСАНО ЦИЛОМ WHILE -------------------    
let i = 0;
while ( i < 2 ) {
    console.log(i);
    const a = prompt('Один из последних просмотренных фильмоы?', ''),
          b = prompt('На сколько оцените его?','');
          i++;
          if ( a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
        }
    }


if (personalMovieDB.count < 10 ) {
        console.log("просмотрено довольно мало филтмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30 ){
    console.log("Вы кономан")
} else {
    console.log("Произошла ошибка");
} 

console.log(personalMovieDB);