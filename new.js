const numberOfFilms = +prompt("how many films did you watch?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("last movie?", ""),
      b = prompt("your rate?", ""),
      c = prompt("last movie?", ""),
      d = prompt("your rate?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);