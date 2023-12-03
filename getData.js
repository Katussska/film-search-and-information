const API_KEY = 'ef076b99225793040b2243b3b0b5b8c5';

export function getGenres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.genres)
        .catch(error => {
            console.error('Chyba při získávání dat:', error);
            alert('Došlo k chybě, zkuste to prosím znovu.');
        });
}

export function getTrending() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.error('Chyba při získávání dat:', error);
            alert('Došlo k chybě, zkuste to prosím znovu.');
        });
}

export function getFilms(searchTerm) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.error('Chyba při získávání dat:', error);
            alert('Došlo k chybě, zkuste to prosím znovu.');
        });
}