const link = decodeURI(location.href);
const temp = link.split("?");
const data =temp[1].split(":");
const name = data[0];
const date = data[1];
const dateArray = date.split("-");
const y = dateArray[0];
const m = dateArray[1];
const d = dateArray[2];

const title = document.querySelector('h1');
title.textContent = `Symbol of ${name}`;
const ydiv = document.querySelector('#y');
ydiv.textContent = y;
const mdiv = document.querySelector('#m');
mdiv.textContent = m;
const ddiv = document.querySelector('#d');
ddiv.textContent = d;