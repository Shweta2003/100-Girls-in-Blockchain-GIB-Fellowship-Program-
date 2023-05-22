// callback - used to implement asynchronous functions

const { message } = require("prompt");

// the 3rd console is printed before 2nd console.. flow broken
// console.log("Start the session");
// setTimeout(function(){
//     console.log("class is boring")
// },5000)
// console.log("class over")

// promise
const muPromise = new Promise((resolve,reject) => {
    let condition = -1;
    if(condition < 0){
        resolve('Promise resolves then() is called');
    }
    else{
        reject('Promise rejected catch() is called');
    }
});

muPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});