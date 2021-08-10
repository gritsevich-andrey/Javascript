
 window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function tabHideContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTabContent(i=0) {
    tabsContent[i].classList.add('show' , 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}
tabHideContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
const target = event.target;

if(target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
if (target == item) {
    tabHideContent();
    showTabContent(i);
}
    });
}

});
//Modal
const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('[data-close]');


modalTrigger.forEach(btn => {
   btn.addEventListener('click', openModal);
});
closeBtn.addEventListener('click', closeModal);



function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modal.addEventListener('click', (event) => {
if(event.target === modal){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
});

document.addEventListener('keydown', (event) => {
    if(event.code === "Escape" && modal.classList.contains('show')){
        closeModal();
}
});
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(setTimerId);
}
const setTimerId = setTimeout(openModal, 5000);

function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) 
        {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
}
window.addEventListener('scroll', showModalByScroll);
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container',
    'menu__item'
).render();
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container',
    'menu__item'
).render();
new MenuCard(
    "img/tabs/post.jpg",
    "vegy",
    'Меню "Постное"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container',
    'menu__item'
).render();
});

class MenuCard {
    constructor(src, alt, title, desc, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer =27;
        this.changeToUAH();
    }
    changeToUAH(){
this.price = this.price * this.transfer;
    }
    render() {
        const element = document.createElement('div');
        if (this.classes === 0) {
            this.element = 'menu__item'
        } else {
         this.classes.forEach(className => element.classList.add(className));   
        }
        element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
                this.parent.append(element);
    }
}
const log = function(a,b, ...rest) {
    console.log(a, b, rest);
};
log('Андрей', 'Елена', 'Рест', 'Рест');

const person = {
    name: 'Alex',
    tel: '+375445392833'
};
console.log(JSON.parse(JSON.stringify(person)));