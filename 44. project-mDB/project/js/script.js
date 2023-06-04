/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1 Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});
// adv.forEach(function(item) {
//     item.remove();
// });

//2 Изменить жанр фильма, поменять "комедия" на "драма"
// genre.innerHTML = "Драма";
genre.textContent = "Драма";

//3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
// const bg = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg")';

//4
movieList.innerHTML = "";
//5
movieDB.movies.sort();
//4
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
<div class="delete" id = "${i}"></div></li>`;
});


// let objj = {};
// let i = 0;

// const movieslist = document.querySelector('.promo__interactive-item');
// console.log(movieslist);


// movieDB.movies.forEach(item => {
//     // console.log(item);
//     objj[i] = item;
//     i++;
// });
// console.log(objj);


// bg.style.background = "../img/bg.jpg";
/* function bgg() {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  }
  function bgg2() {
    bg.style.backgroundImage = 'url("img/mars.webp")';
  }
  
  setTimeout(bgg, 1000);
  setTimeout(bgg2, 2000); */
  
 /*  let timerId = setTimeout(function tick() {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
    timerId = setTimeout(tick, 2000); 
  }, 2000);
  let timerId2 = setTimeout(function tick2() {
    bg.style.backgroundImage = 'url("img/mars.webp")';
    timerId2 = setTimeout(tick2, 2000); 
  }, 3000); */

