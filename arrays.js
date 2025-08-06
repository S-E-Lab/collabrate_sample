// why we are moving to arrays when we have objects? 
// Arrays are ordered collections, which makes them ideal for storing sequences of items.   
// They provide built-in methods for common operations like adding, removing, and iterating over items. where as in objects we can't add or remove items easily.
// Arrays are indexed, allowing for quick access to elements by their position.
// Objects are unordered collections, which makes them suitable for key-value pairs and properties.
// Arrays are more efficient for operations that involve sequences or lists of items, such as sorting and filtering.
// Objects are better suited for representing entities with properties and methods.
// Arrays are a fundamental data structure in JavaScript, used to store multiple values in a single variable.
// Arrays are dynamic, meaning they can grow and shrink in size as needed.

//Array creation

//1. by literal notation
   
const fruits = ["Apple", "Banana", "Cherry"];


//2. by constructor
const vegetables = new Array("Carrot", "Broccoli", "Spinach");

//3. by Array.of() method
const grains = Array.of("Rice", "Wheat", "Corn");

//by spread operator
const nuts = ["Almond", "Cashew", "Pistachio", ...fruits];
 console.log(nuts);

/* ✅ Use [] (literal) whenever possible.

   ✅ Use Array.of() if you're dynamically passing values and want to avoid surprises.

   ❌ Avoid using new Array() unless you specifically want to create an array of a given length and fill it later. 
*/

//Array methods: pop (extracts an item from the end), 
//               push (adds an element to the end of the array),
//               shift (extracts an item from the begining), 
//               unshift (adds an element to the beginning of the array).
//               splice (removes an item from the middle of the array),
//               slice (extracts a portion of the array without modifying the original array).

let numbers = [1, 2, 3, 4, 5];
//pop
let lastNumber = numbers.pop(); // removes the last element (5) 
//push
numbers.push(6); // adds 6 to the end
//shift
let firstNumber = numbers.shift(); // removes the first element (1)
//unshift
numbers.unshift(0); // adds 0 to the beginning
//splice
numbers.splice(2, 1); // removes the element at index 2 (which is now 3)
//slice
let slicedNumbers = numbers.slice(1, 3); // extracts elements from index 1 to 2 (2, 4)
console.log("Last Number:", lastNumber);
console.log("First Number:", firstNumber);
console.log("Modified Numbers:", numbers);
console.log("Sliced Numbers:", slicedNumbers);


//Array destructing: 


//flat() and flatmap()

var a,b;
[a,,b]=["p1","p2","p3"]; //ignoring the p2  
console.log(a, " ", b);
