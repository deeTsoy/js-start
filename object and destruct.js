"use strict"

const obj = new Object;

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){    //метод который мы создали для вывода тест
        console.log("test1");
    }
};
options.makeTest();

const {border, bg} = options.colors; //деструктуризация обьекта
    console.log(bg);
//console.log(Object.keys(options). length);
//console.log(options["colors"]["border"])
//console.log(options.name);

//delete options.name; 

//console.log(options);

/*
let counter = 0;
for (let key in options){   // for in это способ перебора(не работающий с обьектами)
    if (typeof (options[key]) === "object"){
        for (let i in options[key]){
            console.log(`свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

*/