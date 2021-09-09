'use strict';
const answ = prompt('Введите ваше имя');
const reg = /\d/ig;
console.log(answ.replace(/\d/ig, "*"));