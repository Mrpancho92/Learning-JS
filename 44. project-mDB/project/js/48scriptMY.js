/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

// ------------------------------

// const addForm = document.querySelector('Form.add'),
//     addInput = addForm.querySelector('.adding__input');
// addForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let newFilm = addInput.value;
//     console.log(newFilm);
//     event.target.reset();
// });

const btn = document.querySelector('button'),
      inputadd = document.querySelector('.adding__input'),
      deleteStringElement = document.querySelectorAll('.delete');
      

      const checkbox = document.querySelector('[type="checkbox"]');
      

const deleteElementt = (e) => {
    e.preventDefault();
    movieList.innerHTML = "";
    let inputmovies = inputadd.value;
    if (inputmovies.length > 20 ) {
        inputmovies = inputmovies.substring(0, 17) + "..."; 
    };
    if (checkbox) {
        console.log(checkbox.checked);
    }
        movieDB.movies.push(inputmovies);
        
        console.log(movieDB.movies); 
     
        movieDB.movies.sort((a, b) => a.localeCompare(b));


     movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete" id = "${i}"></div></li>`;
    });
    // btn.removeEventListener('click', deleteElementt);
    // inputadd.removeEventListener('submit',deleteElementt);
    };
    
    
    

const deleteStringElements = (e) => {
    e.preventDefault();
    let i = 0;
    while ( i <= movieDB.movies.length) {
        if ( Number(e.target.id) === i) {
            console.log(e.target.id);
            console.log(e.target);
            movieDB.movies[i] = "";
            console.log(movieDB.movies);
        };
        i++; 
    };
};
// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
// <div class="delete" id = "${i}"></div></li>`; 
// });

btn.addEventListener('click', deleteElementt);
inputadd.addEventListener('submit',deleteElementt);

deleteStringElement.forEach(item => {
    item.addEventListener('click', deleteStringElements, {once: true});
});


 
/* const favorite = checkbox.checked; // Атрибут checked: определяет - есть ли флажок?

if (newFilm) { // Проверка на пустую строку. Введено ли название фильма? 

    // ЗАДАНИЕ №2
    if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0,22)}...`;
    }

    // ЗАДАНИЕ №4
    if (favorite) {
        console.log('Добавляем любимый фильм');
    }

    // ЗАДАНИЕ №1
    movieDB.movies.push(newFilm); // Добавляем новый фильм в БАЗУ movieDB.movies
    // Перебор фильмов в БАЗЕ и добавление их в movieFilms - список на странице         
    createMovieList(movieDB.movies, movieFilms); 
} */

// addForm.reset(); - Очистка формы. Здесь addForm меняем на event.target