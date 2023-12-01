const API_KEY = 'ef076b99225793040b2243b3b0b5b8c5';

function getTrending() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.error('Chyba při získávání dat:', error);
            alert('Došlo k chybě, zkuste to prosím znovu.');
        });
}

export async function renderTrending() {
    const trendFilms = document.getElementById("trendFilms");
    const trendingResults = await getTrending();

    trendingResults.forEach((e, index) => {
        const moviePoster = document.createElement('img');
        const posterPath = e.poster_path;
        const imgUrl = 'https://image.tmdb.org/t/p/';
        const imgSize = 'w200';
        moviePoster.src = `${imgUrl}${imgSize}${posterPath}`
        moviePoster.alt = 'Movie poster'
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
        movieContainer.setAttribute('data-index', index)

        const dataIndex = parseInt(movieContainer.getAttribute('data-index'));

        trendFilms.append(movieContainer)
    })
}


