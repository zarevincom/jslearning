'use strict';

const arr = [1, 2, 3, 4, 10];

// arr.pop();
// arr.push(9);

// arr[99] = 0

console.log(arr);

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});


const str = prompt("Введите товары:");
const products = str.split(', ')
products.sort();
console.log(products.join('; '))