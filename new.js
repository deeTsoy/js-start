"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many films did you watch?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many films did you watch?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
for (let i = 0; i < 2; i++){
    const a = prompt("last movie?", ""),
          b = prompt("your rate?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b; 
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}
}

rememberMyFilms();

function detectPersonalLevel() {
if(personalMovieDB.count < 10){
    console.log("недостаточно фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("classic user");
} else if (personalMovieDB.count >= 30 ){
    console.log("you are cinemagolic");     
} else {
    console.log("error")
} 
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGeners(){
    for(let i = 1; i <= 3; i++){
       const genre = prompt(`your favorite geners is? ${i}`);
       personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGeners();