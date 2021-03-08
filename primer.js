/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   primer.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dimatsoy <dimatsoy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/03/06 23:01:20 by dimatsoy          #+#    #+#             */
/*   Updated: 2021/03/06 23:07:43 by dimatsoy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

"use strict"

const numberOfFilms = +prompt("how many films did you watch?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

/*
let i;
const a = prompt("last movie", "");
const b = prompt("your rate?", "");

i = 0;
if (i < 2){
    i++;
}
else if (a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b; 
    console.log("done");
} else {
    console.log("error");
    i--;
}
*/


if(personalMovieDB.count < 10){
    console.log("недостаточно фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("classic user");
} else if (personalMovieDB.count >= 30 ){
    console.log("you are cinemagolic");     
} else {
    console.log("error")
} 

console.log(personalMovieDB);