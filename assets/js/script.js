'use strict';

// Mobile menu slide-in DOM manipulation
document.querySelector('.menu-btn').addEventListener('click', ()=> document.querySelector('.main-menu').classList.toggle('show'));

// Picture carousel function
var slidesIndex = 0;
// slideShow();
// const styling = ;
const slideShow = function () {
    var s = 0;
    var numberOfImages = document.getElementsByClassName('.slide-item');
    for (s = 0; s < numberOfImages.length; s++){
        numberOfImages[s].styling.display = "none";
    }
    slidesIndex++;
    if (slidesIndex > numberOfImages.length){
        slidesIndex = 1
    }
    numberOfImages[slidesIndex -1].styling.display = "block";
    setTimeout (slideShow, 2000)
}
console.log(slideShow('Coming soon'))

   
