'use strict';

// Mobile menu slide-in DOM manipulation
document.querySelector('.menu-btn').addEventListener('click', ()=> document.querySelector('.main-menu').classList.toggle('show'));


// Picture carousel function
const imageArray = [
    'assets/img/biography.jpg',
    'assets/img/republic1.jpg',
    'assets/img/songhero.jpeg',
];

let slideIndex = 0;

const slideShow = function () {
    document.getElementById('slide1').src = imageArray[slideIndex];
    slideIndex++;
    if (slideIndex == imageArray.length) { slideIndex = 0; }
    setTimeout("slideShow()", 3000);
}
slideShow();

