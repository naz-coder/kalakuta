'use strict';

// Mobile menu slide-in DOM manipulation
document.querySelector('.menu-btn').addEventListener('click', ()=> document.querySelector('.main-menu').classList.toggle('show'));


// Picture carousel function
const imageArray = [
    'assets/img/gallery1.webp',
    'assets/img/gallery2.webp',
    'assets/img/gallery4.jpg',
    'assets/img/gallery5.webp',
    'assets/img/stage.jpg'
];

let slideIndex = 0;

const slideShow = function () {
    document.getElementById('slide1').src = imageArray[slideIndex];
    slideIndex++;
    if (slideIndex == imageArray.length) { slideIndex = 0; }
    setTimeout("slideShow()", 3000);
}
slideShow();

