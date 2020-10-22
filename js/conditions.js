"use strict"
const num = 51;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!!!');
}


(num === 50) ? console.log('Ok!') : console.log('Error');


switch (num) { // - ВСЕГДА СТРОГОЕ СРАВНЕНИЕ
    case 49: 
        console.log('Wrong!');
        break;
    case 100: 
        console.log('Wrong!');
        break; 
    case 50: 
        console.log('Right!');
        break;
    default:
        console.log('Everything is bad!');
        break;
}