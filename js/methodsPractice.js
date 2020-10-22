/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: true
};

// rememberMyFilms();
// detectPersonalLevel();
showMyDB();
writeYourGenres();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

function showMyDB() {
    if (!personalMovieDB.private) {
        return (console.log(personalMovieDB));
    }
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
              lastMovieRating = prompt("На сколько оцените его?", "");
    
        if (lastMovie != null && lastMovieRating != null && lastMovie != '' && lastMovieRating != '' && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = lastMovieRating
        } else {
            i--;
            console.log('Error!')
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

console.log(personalMovieDB);