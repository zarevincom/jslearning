/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

/* for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
          lastMovieRating = prompt("На сколько оцените его?", "");

    if (lastMovie != null && lastMovieRating != null && lastMovie != '' && lastMovieRating != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieRating
    } else {
        i--;
        console.log('Error!')
    }
} */
/* let i = 0;
while (i < 2) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
          lastMovieRating = prompt("На сколько оцените его?", "");
    if (lastMovie != null && lastMovieRating != null && lastMovieRating != '' && lastMovie != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieRating
        i++;
        console.log('Success!');
    } else {
        i--;
        console.log('Error!');
        console.log(i);
    }
    if (i < 0) {
        i = 0;
    }
} */

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);