'use strict';
const box = document.querySelector('.box');
const btn = document.querySelector('button');
const width = box.clientWidth;
const height = box.clientHeight;
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.getBoundingClientRect().top);
});
const style = window.getComputedStyle(box);
console.log(style.display);