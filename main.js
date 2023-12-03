import {getTrending, getFilms, getGenres} from "./getData.js";
import {renderFilms} from "./renderData.js";

const SLIDES_TO_SHOW = 4;
const SLIDE_WIDTH = 250;
export const GENRES = await getGenres();
const TRENDING_RESULTS = await getTrending();
const SLIDER_CONTAINER = document.querySelector('#filmList');

let slides = SLIDER_CONTAINER.querySelectorAll('.movie');
let currentIndex = 0;
let maxIndex = slides.length - SLIDES_TO_SHOW;
let films = document.querySelectorAll('.movie')

renderFilms("trending films", TRENDING_RESULTS);

function moveRight() {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function updateSlider() {
    let newPosition = -currentIndex * SLIDE_WIDTH;
    SLIDER_CONTAINER.style.transform = `translateX(${newPosition}px)`;
}

document.querySelector('#forward').addEventListener('click', moveRight);
document.querySelector('#back').addEventListener('click', moveLeft);

async function update() {
    document.getElementById('searchInput').value = '';
    SLIDER_CONTAINER.style.transform = `translateX(0px)`;
    slides = SLIDER_CONTAINER.querySelectorAll('.movie');
    currentIndex = 0;
    maxIndex = slides.length - SLIDES_TO_SHOW;
    films = document.querySelectorAll('.movie')

}

document.getElementById('searchInput').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value;
        await update();
        let filmResults = await getFilms(searchTerm);
        await renderFilms(searchTerm, filmResults);
    }
});

document.getElementById('logo').addEventListener("click", async function () {
    await update();
    await renderFilms("trending films", TRENDING_RESULTS);
});

document.getElementById('cancel').addEventListener('click', function () {
    document.getElementById('popUp').classList.add('hidden');
})