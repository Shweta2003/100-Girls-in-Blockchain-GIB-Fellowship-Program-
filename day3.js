// // arrays

// // declaration

// let arr1 = [1,2,3,4,5,"shweta"];
// let arr2 = new Array();

// // change type
// console.log(typeof(arr1));
// let a = arr1.toString();
// console.log(typeof(a));

// // join all elements
// let b = arr1.join("/");
// console.log(b)

// // remove last element
// let c = arr1.pop();
// console.log(arr1);
// console.log(c);

// // add at end
// arr1.push("new");
// console.log(arr1);

// // remove from start
// arr1.shift();
// console.log(arr1);

// // add at begin
// arr1.unshift(0);
// console.log(arr1);

// // delete particular index
// delete arr1[3];
// console.log(arr1);

// // add 2 arrays
// let arr3 = [6,7,8,9];
// let e = arr1.concat(arr3);
// console.log(e);

// // sort
// let arr4 = ["apple", "banana","mango","papaya","guava"];
// let f = arr4.sort();
// console.log(f);
// console.log(f.reverse());

// // slice part of array
// let g = arr3.splice(2,0,10,11);
// console.log(g);
// let h = arr3.splice(2,2,45,55);
// console.log(h);


// date and time
// digital clock function

console.log("Clock printing at interval of 3 seconds : ");
let clock = setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let setm = "";
    if (hours < 10) {
      hours = "0" + hours;
    }
    if(hours > 12){
        hours = hours - 12;
        setm = "PM";
    }
    else{
        setm = "AM";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    console.log(`${hours}:${minutes}:${seconds}  ${setm}`);
  }, 3000);