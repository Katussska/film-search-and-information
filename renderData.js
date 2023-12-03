import {GENRES} from "./main.js";
import {createChart} from "./chart.js";

export function createPopUp(e, imgUrl, imgSize, posterPath) {
    document.getElementById('popUpPoster').src = `${imgUrl}${imgSize}${posterPath}`;
    document.getElementById('popUpTitle').innerHTML = e.title;
    document.getElementById('releaseDate').innerHTML = e.release_date;
    document.getElementById('description').innerHTML = e.overview;

    let rating = e.vote_average / 10;
    let genreList = document.getElementById('popUpList');
    genreList.innerHTML = '';

    e.genre_ids.forEach((genre) => {
        let genreSpan = document.createElement('span');
        let genreName;

        for (let i = 0; i < GENRES.length; i++) {
            if (genre === GENRES[i].id) {
                genreName = GENRES[i].name
            }
        }

        genreSpan.innerHTML = genreName;
        genreList.append(genreSpan);
    })

    createChart(rating);
}

export function createFilm(e, index) {
    const moviePoster = document.createElement('img');
    const posterPath = e.poster_path;
    const imgUrl = 'https://image.tmdb.org/t/p/';
    const imgSize = 'w200';
    moviePoster.src = `${imgUrl}${imgSize}${posterPath}`
    moviePoster.alt = 'Movie poster not found'
    moviePoster.classList.add('moviePoster')

    const movieTitle = document.createElement('h1');
    movieTitle.innerHTML = e.title;

    const movieTitleContainer = document.createElement('div')
    movieTitleContainer.append(movieTitle)
    movieTitleContainer.classList.add('movieTitle')

    const movieContainer = document.createElement('div')
    movieContainer.append(moviePoster)
    movieContainer.append(movieTitleContainer)
    movieContainer.classList.add('movie')

    movieContainer.addEventListener('click', () => {
        createPopUp(e, imgUrl, imgSize, posterPath);
        document.getElementById('popUp').classList.remove('hidden')
    })

    return movieContainer;
}

export function renderFilms(searchTerm, results) {
    const filmList = document.getElementById("filmList");
    filmList.innerHTML = '';


    const title = document.getElementById('titleFilms');
    title.innerHTML = searchTerm
    title.style.textTransform = 'capitalize';

    results.forEach((e, index) => {
        filmList.append(createFilm(e, index))
    })
}

