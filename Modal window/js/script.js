
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
   btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});
});
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

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

});