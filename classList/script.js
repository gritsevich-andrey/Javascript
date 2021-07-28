"use strict";
const btns = document.querySelectorAll('button'),
wrapper = document.querySelector('.btn-block');
btns[0].addEventListener('click', () => {
 btns[1].classList.toggle('red');
});
wrapper.addEventListener('click', (event) => {
if(event.target && event.target.classList.contains('blue')){
    console.log('hello');
}
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);