"use strict"

function learnjs(lang, callback) {
    console.log(`i learn: ${lang}`);
    callback();
}
function done(){
    console.log("i got this lesson!")
}

learnjs("javaScript", done);