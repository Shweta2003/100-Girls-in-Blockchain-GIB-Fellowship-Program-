// single line comment

// 2 data types :
// 1. Primitive
// 2. reference

// operator :
// 1. arithemetic
// 2. Logical
// 3. comparison
// 4. bitwise
// 5. assignment

// print fizzbuzz
const i = 100;
let k;
for(k = 0 ; k < 100 ; k ++){
    if(k%3 === 0 && k%5 === 0){
        console.log(k + " : FizzBuzz");
    }
    else if(k%3 === 0){
        console.log(k + " : Fizz");
    }
    else if(k%5 === 0){
        console.log(k + " : Buzz");
    }
    else{
        continue;
    }
}


// print pattern

// *
// **
// ***
// ****
// *****

let a0;
for(let i = 1 ; i <= 5 ; i ++){
    a0 = "";
    for(let j = 0 ; j <i ; j ++){
        a0 += "*";
    }
    console.log(a0);
}

// *****
// ****
// ***
// **
// *

let a1;
for(let i = 0 ; i < 5 ; i ++){
    a1 = "";
    for(let j = 5 - i ; j > 0 ; j --){
        a1 += "*";
    }
    console.log(a1);
}

//   *
//   **
//  ***
//  ****
// *****

var a = '';
var n = 5;
var m = (n-1); 
for(i=1; i <= n; i++)
{
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
}