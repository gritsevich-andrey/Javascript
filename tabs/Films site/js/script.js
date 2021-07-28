

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
const adv = document.querySelectorAll('.promo__adv img');
const movieList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});

const poster = document.querySelector('.promo__bg ');
const genre = poster.querySelector('.promo__genre');
genre.textContent = 'Драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i)=> {
movieList.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
<div class="delete"></div></li>`
});
