const days0fweek = [
    'dom','seg',
    'ter','qua',
    'qui','sex',
    'sab'
];
const months = [
    'JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'
];

function $(id) {
    return document.getElementById(id);
}
const zeroPadding = (num) => String(num).padStart(2, '0');

function clock() {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
    const day = today.getDay();
    const date = today.getDate();
    const months = today.getMonth();
    const year = today.getFullYear();

    $('horas').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = ampm;
    $(days0fweek.at(day - 1)).classList.remove('active');
    $(days0fweek[day]).classList.add('active');
    $('anos').innerHTML = year;
    $('mês').innerHTML = months[month];
    $('dia').innerHTML = zeroPadding(date);
}

setInterval(clock, 400);