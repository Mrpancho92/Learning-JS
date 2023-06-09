'use strict';

const box = document.querySelector('.box');

const newHeight = NaN;
const newWidth = NaN;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 100}px`;
    elem.style.width = `${w ?? 100}px`;
    console.log(elem.style.height);
    console.log(elem.style.width);
}

changeParams(box, newHeight, newWidth);