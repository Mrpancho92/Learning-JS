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
const promoimg = document.getElementsByTagName('img');
console.log(promoimg);

promoimg[1].remove();
promoimg[2].remove();
promoimg[1].remove();

console.log(promoimg);

const promoss = document.getElementsByClassName('promo__adv');
promoss[0].remove();

//2 Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
genre.innerHTML = "Драма";

//3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
const bg = document.querySelector('.promo__bg');
// bg.style.background = "../img/bg.jpg";
/* function bgg() {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  }
  function bgg2() {
    bg.style.backgroundImage = 'url("img/mars.webp")';
  }
  
  setTimeout(bgg, 1000);
  setTimeout(bgg2, 2000); */
  
  let timerId = setTimeout(function tick() {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
    timerId = setTimeout(tick, 2000); 
  }, 2000);
  let timerId2 = setTimeout(function tick2() {
    bg.style.backgroundImage = 'url("img/mars.webp")';
    timerId2 = setTimeout(tick2, 2000); 
  }, 3000);

