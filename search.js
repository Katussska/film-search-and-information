const API_KEY = 'ef076b99225793040b2243b3b0b5b8c5';

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value;
        searchMovies(searchTerm);
    }
});

async function searchMovies(searchTerm) {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = ''; // Vyčistit předchozí výsledky

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
        const data = await response.json();

        const movies = data.results;
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.textContent = movie.title;
            moviesList.appendChild(movieElement);
        });
    } catch (error) {
        console.error('Chyba při načítání dat:', error);
    }
}
