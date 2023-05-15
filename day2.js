// how to take data from user

// npm install prompt-sync

const prompt = require("prompt-sync")({sigint:true});
let a = prompt("enter your name : ");
console.log("data entered : " + a);


// + operator converts everything to number
console.log(+222);
// op - 222
console.log(false);
// op - false
console.log(+false);
// op - 0
console.log(+"hello");
// op - NaN (not a number)

// ternary operator fizzbuzz

let a4;

for(let i = 1 ; i <= 100 ; i ++){
    (i%3 === 0)?
        (i%5 === 0)?
            console.log(i + " : FizzBuzz")
        :   console.log(i + " : Fizz")
    :(i%5 === 0)?
            console.log(i + " : Buzz")
        : a4 = i
}

// string operations

let name = "Shweta";

// string interpolation

let full = `Hello my name is ${name}. \n${name} is 19 years old. Meet ${name}`
console.log(full);

let str = "she is pretty ";
let str1 = str.concat("meet her");
console.log(str1);

let try1 = "                 hey                ";
console.log(try1 + "end");
console.log("left trim : " + try1.trimStart() + "end");
console.log("after trimming : " + try1.trim() + "end");

let try2 = "I am Shweta";
console.log(try2.toUpperCase());
console.log(try2.toLowerCase());

console.log(try2.slice(2,9));

console.log("length of string try2 : " + try2.length)

let m = try2.replace("Shweta","Swati");
console.log(m);

console.log("character at index 2 : ", try2.charAt(2))

let arr = try2.split(" ");
console.log(arr)


// functions

function cube(key){
    return key*key*key;
}
console.log(cube(2));

// arrow function

const product = (a,b) => {
    console.log("value of a : " + a);
    console.log("value of b : " + b);
    console.log("product of a and b is : " + a*b);
}

product(2,3);
product(7,8);

// call function

function fun(s,p){
    return s*p;
}

var result = fun.call(this,10,20);
console.log("result of fun : " + result);