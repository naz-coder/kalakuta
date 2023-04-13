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

// Songs search function 
// const songSearch = (e) => {
//     const results = songdata.filter(data => {
//         if(e.target.value === " ") return songdata
//         return data.name.toLowerCase().includes(e.target.value.toLowerCase())
//     })
//     SVGMetadataElement({
//         query: e.target.value,
//         list: results
//     })
// }

const songSearch = () => {
    var input, filter, div, h3, x, alph, searchValue;
    input = document.getElementById('songsOfFela');
    filter = input.value.toUpperCase();
    div = document.getElementById('cardContent');
    h3 = document.getElementsByTagName('h3');

    for(x=0; x<h3.length; x++){
        alph = h3[x].getElementsByTagName("a")[0];
        searchValue = alph.textContent || alph.innerText;
        if(searchValue.toLowerCase().indexOf(filter) > -1){
            h3[x].style.display = " ";
        }else{
            h3[x].style.display = "none";
        }
    }
}
//     const results = songdata.filter(data => {
//         if(e.target.value === " ") return songdata
//         return data.name.toLowerCase().includes(e.target.value.toLowerCase())
//     })
//     SVGMetadataElement({
//         query: e.target.value,
//         list: results
//     })
