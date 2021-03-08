"use strict"
let num = 20;

function showFirstMassage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
 

showFirstMassage("hello");
console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 5));
console.log(calc(2, 3));
console.log(calc(4, 8));

function ret() {
    let num = 50;
    return(num);
}

const anotherNum = ret();
console.log(anotherNum);


const loger = function() {
    console.log("hello");

};
loger();


const calc = (a, b) => a + b; // при увеличении функции нужно поставить {} 
