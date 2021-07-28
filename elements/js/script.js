'use strict';
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const hearts=document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius='100%';
circle[0].style.backgroundColor='red';
const div = document.createElement('div');
div.classList.add('black');
document.querySelector('.wrapper').append(div);
div.innerHTML ="<h1>Привет</h1>";
hearts[0].after(div);
