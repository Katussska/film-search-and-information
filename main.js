import {renderTrending} from './trends.js';

await renderTrending();

let SLIDER_CONTAINER = document.querySelector('#trendFilms');
let SLIDES = SLIDER_CONTAINER.querySelectorAll('.movie');
let CURRENT_INDEX = 0;
let SLIDES_TO_SHOW = 4;
let SLIDE_WIDTH = SLIDES[0].offsetWidth;
let MAX_INDEX = SLIDES.length - SLIDES_TO_SHOW;

function moveRight() {
    if (CURRENT_INDEX < MAX_INDEX) {
        CURRENT_INDEX++;
        updateSlider();
    }
}

function moveLeft() {
    if (CURRENT_INDEX > 0) {
        CURRENT_INDEX--;
        updateSlider();
    }
}

function updateSlider() {
    let newPosition = -CURRENT_INDEX * SLIDE_WIDTH;
    SLIDER_CONTAINER.style.transform = `translateX(${newPosition}px)`;
}

document.querySelector('#forward').addEventListener('click', moveRight);
document.querySelector('#back').addEventListener('click', moveLeft);