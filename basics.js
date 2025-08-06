//variables

var city = "Delhi";   // can be redeclared,re assigned 
console.log(city);
var city="Hyderabad";
console.log(city);
//let 
let age = 25;
console.log(age);   
age = 26;  // re assign
console.log(age);
//let age=23; can't be re declared
//const
const country = "India";  // cannot be changed meaning re-declaration and re assignment is not possible
console.log(country);
// country = "USA";  //Error: Assignment to constant variable

//Scope
//function scope/local scope with var
function greet() {
  var name = "Nidhi"; // Local to greet()
  console.log(name);  // Accessible here
}

greet();
//console.log(name);  //Error: name is not defined

//global scope with let and const
let colg = "KMIT";       // Global scope
const year = 2025;         // Global scope

function printDetails() {
  console.log(colg);     // Accessible inside function
  console.log(year);       // Accessible inside function
}

printDetails();

console.log(colg);       // Accessible globally
console.log(year);         // Accessible globally

//Data Types
let name = "Nidhi";
let a = 22;
let isFaculty = true;
let x = null; //object
let mark = null;
console.log(mark === null);  // true
let address; // undefined
let student = { name: "Nidhi", dept: "IT" };
let scores = [90, 85, 77];
let greet1 = function() { return "Hello"; };

console.log(typeof name);      // string
console.log(typeof a);       // number
console.log(typeof isFaculty); // boolean
console.log(typeof x);     // object (this is a JavaScript quirk!)
console.log(typeof address);   // undefined
console.log(typeof student);   // object
console.log(typeof scores);    // object (arrays are a special kind of object)
console.log(typeof greet1);     // function

//operators
//conditional stmts if,else,if-else-if,switch
//loops (while,do-while)
//for
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
//for...in -use When you want to loop through all keys in an object.
let stud = { name: "Natasha", age: 22, course: "IT" };

for (let key in stud) {
  console.log(key + ":", stud[key]);
}

//for...of Loop-To read values directly from arrays, strings, or other iterable objects.
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log(color);
}

// .forEach() is a built-in array method in JavaScript that executes a provided 
// callback function once for each element in the array.

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});








