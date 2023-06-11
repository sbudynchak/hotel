

var slides1 = document.querySelectorAll('.slide1');
var currentSlide1 = 0;


function nextSlide_room1() {
    slides1[currentSlide1].className = 'slide1';
    currentSlide1 = (currentSlide1+1)%slides1.length;
    slides1[currentSlide1].className = 'slide1 active';
}
function prevSlide_room1() {
    slides1[currentSlide1].className = 'slide1';
    currentSlide1 = (currentSlide1 - 1 + slides1.length) % slides1.length;
    slides1[currentSlide1].className = 'slide1 active';
}
nextSlide_room1();


var slides2 = document.querySelectorAll('.slide2');
var currentSlide2 = 0;


function nextSlide_room2() {
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (currentSlide2+1)%slides2.length;
    slides2[currentSlide2].className = 'slide2 active';
}
function prevSlide_room2() {
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (currentSlide2 - 1 + slides2.length) % slides2.length;
    slides2[currentSlide2].className = 'slide2 active';
}
nextSlide_room2();

var slides3 = document.querySelectorAll('.slide3');
var currentSlide3 = 0;


function nextSlide_room3() {
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 = (currentSlide3+1)%slides3.length;
    slides3[currentSlide3].className = 'slide3 active';
}
function prevSlide_room3() {
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 = (currentSlide3 - 1 + slides3.length) % slides3.length;
    slides3[currentSlide3].className = 'slide3 active';
}
nextSlide_room3();

var slides4 = document.querySelectorAll('.slide4');
var currentSlide4 = 0;

function nextSlide_room4() {
    slides4[currentSlide4].className = 'slide4';
    currentSlide4 = (currentSlide4+1)%slides4.length;
    slides4[currentSlide4].className = 'slide4 active';
}
function prevSlide_room4() {
    slides4[currentSlide4].className = 'slide4';
    currentSlide4 = (currentSlide4 - 1 + slides4.length) % slides4.length;
    slides4[currentSlide4].className = 'slide4 active';
}
nextSlide_room4();

