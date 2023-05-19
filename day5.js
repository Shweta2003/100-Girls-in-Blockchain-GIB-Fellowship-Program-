// CLass

// class firstclass{
//     fun1(){
//         console.log("This is fun1");
//     }

//     fun2(){
//         console.log("this is fun2");
//     }
// }

// let firstobj = new firstclass();
// firstobj.fun1();
// firstobj.fun2();

// constructor

// class secondclass{
//     constructor(){
//         console.log("object of second class created!!")
//     }

//     fun1(){
//         console.log("fun1 called");
//     }
// }

// let secondobj = new secondclass();
// secondobj.fun1();

// // using this keyword
// class profile{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     fun(){
//         console.log("My name is " + this.name + ". I am " + this.age + " years old");
//     }
// }

// let p1 = new profile("shweta",19);
// p1.fun();


// prototyping

// let a = {
//     name: "shweta",
//     language : "js"
// }

// let p = {
//     run : () => {
//         console.log("still learning "+ a.name);
//     }
// }

// // creating prototype to use p with a
// a.__proto__ = p;
// a.run();

// let a = {
//     name: "shweta",
//     language : "js",
//     // if we have prototype and run in a, a is given priority
//     // run: () => {
//     //     console.log("still learning from a")
//     // }
// }


// // creating prototype to use p with a
// // in this case still learning from a will be o/p because it has higher priority than run of p

// a.__proto__ = p;
// a.run();


// // inheritance
// // using extends

// class person{
//     setdata(name,gender){
//         this.name = name;
//         this.gender = gender;
//     }

//     display(){
//         console.log("hey my name is " + this.name);
//     }
// }

// class worker extends person{
//     setwork(){
//         console.log("Hi I am a worker. I am " + this.gender);
//     }
// }

// let w1 = new worker();
// w1.setdata("harry",27);
// w1.display();
// w1.setwork();

// // overriding
// class menu{
//     constructor(date){
//         console.log(`look at menu of ${date}`);
//         this.date = date;
//     }
//     today(){
//         console.log("today's menu is - chicken, paneer, dal");
//     }
// }

// class veg extends menu{
//     // to pass value to constructor of parent class, we use super keyword
//     constructor(datae){
//         super(datae);
//         console.log("veg menu for " + datae);
//     }
//     today(){
//         console.log("today's menu for veg is : paneer");
//     }
// }

// let a1 = new veg("22");
// a1.today();


// // static keyword
// class person{
//     setdata(name,gender){
//         this.name = name;
//         this.gender = gender;
//     }

//     static captalize(name){
//         console.log("person's name is " + name);
//     }
// }

// let t = new person();
// t.setdata("shweta","female");

// // gives error
// // t.captalize(t.name);

// // person.captalize(t.name);

// browser object model

// html code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script type="text/javascript">
//         let al = () => {
//             open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static")
//         }
//     </script>
// </head>
// <body>
//     <button onclick=al() >Fetch</button>
// </body>
// </html>


// document object model

// html code

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script type="text/javascript">
//         let al = () => {
//             let el = document.getElementById("username").value;
//             alert("hi there " + el);
//         }

//         let mark = () => {
//             let ne = document.getElementsByName("fruit");
//             for(let i = 0 ; i < ne.length ; i ++){
//                 if(ne[i].checked){
//                     alert("You selected " + ne[i].value);
//                 }
//             }
//         }

//         let findlen = () => {
//             let a = document.getElementsByName("fruit");
//             alert("total fruits : " + a.length);
//         }

//         function validateform(){
//             var name = document.myform.name.value;
//             var password = document.myform.password.value;

//             if(name == null || name == ""){
//                 alert("please enter name")
//             }
//             else if(password.length < 6){
//                 alert("password must have more than 6 character length");
//             }
//             else{
//                 alert("user registered successfully!!")
//             }
//         }
//     </script>
// </head>
// <body>
//     <!-- <input id="username" type="text"></input>
//     <button onclick=al()>SUBMIT</button> -->

//     <!-- <form>
//         <input type="radio" name="fruit" value="apple">apple</input>
//         <input type="radio" name="fruit" value="banana">banana</input>
//         <input type="radio" name="fruit" value="mango">mango</input>
//         <input type="submit" onclick=mark()>
//         <button onclick=findlen()>FIND LENGTH</button>
//     </form> -->

//     <!-- <form name="myform" method="abc.jsp" onsubmit="return validateform()" >
//     Name : <input type="text" name="name"><br/>
//     Password : <input type="password" name="password"><br/>
//     <input type="submit" value="register">
//     </form> -->

// </body>
// </html>

