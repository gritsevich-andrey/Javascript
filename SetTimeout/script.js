'use strict';
const start = new Date();

for (let i=0; i<10000; i++)
{
    let some = i**3;
}
const end = new Date();
console.log(`Цикл отработал ${end-start} мс`);

const endTime = '2015-10-12';

function getTimeEnd (endTime){
const t = Date.parse(endTime) - Date.parse(new Date());
const days = Math.floor(t /1000 * 60 * 60 * 24);
const hours = Math.floor((t /(1000 * 60 * 60) % 24));
const minutes = Math.floor((t /(1000 * 60) % 60));
const seconds = Math.floor((t /(1000) % 60));

return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
}

}