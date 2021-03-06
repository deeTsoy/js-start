"use strict"

if(4 == 4) {
    console.log("ok!");
} else {
    console.log("error!");
} 


/*
if(num < 49){
    console.log("error!");
} else if(num > 100){
    console.log("too much");
} else {
    console.log("ok");
}

(num === 50) ? console.log("ok") : console.log("error!"); // тернарный оператор вопросителбгый знак ?
*/
const num = 50;

switch(num){
    case 49:
        console.log("nope");
        break;
    case 32:
        console.log("nope");
        break;
    case  50:
        console.log("nice");
        break;
    default:
        console.log("not today");
        break;
}