// Object

// initialization
// let person = {firstname : "shweta" , lastname : "mandal" , age : 22};

// literal
// const person = {firstname : "shweta" , lastname : "mandal" , age : 22};

// by object class
const person = new Object();
person.firstname = "Shweta";
person.lastname = "Mandal";
person.age = 22;

console.log(person);

// create another refernce to person
let x = person;
// it will point same address location and not create copy of it
x.age = 10;
console.log(person);

let txt = ""
// iterating elements of x
for(let x in person){
    txt += person[x]
}
console.log(txt);


// EVENTS

// html code

{/* <title>Document</title>
</head>
<body>
    <script type="text/javascript">
        function msg(){
            let message = prompt("Who are you?");
            alert("Hi "+message);
        }

        function mouseover(){
            alert("you just hobvered over me");
        }

    </script>
    <button onclick="msg()">Click Me</button>
    <h1 onmouseover="mouseover()">Hoverover me</h1>
</body>
</html> */}