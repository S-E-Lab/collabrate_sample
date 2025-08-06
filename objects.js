// objects.js
// objects in JavaScript can have properties and methods.

//ways to create an object
//1.creates an empty JavaScript object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



// 2. Object Constructor
const car = new Object();
car.make = "Ford";
car.model = "Mustang";
car.year = 1969;
car.color = "red";


// 3. Object Literal Notation
let student={   
    Boolean : true,  //object treat Boolean as a string and it doesn't treat it as a keyword
    name: "John Doe",
    age: 20,    
    courses: ["Math", "Science", "History"],
    isEnrolled: true,
    return : "Student object"
}
/*Note: Why are object property names treated as strings?
        Because JavaScript objects are fundamentally maps from strings (or symbols) to values.
       JavaScript automatically treats it as a string. */

for(let key in student){
    console.log(`${key}: ${student[key]}`);
}
console.log('-------------------');
 let obj=student;
 console.log(obj.Boolean= false); // Changing the Boolean property to false
 console.log(obj.name); // Output: John Doe
 console.log(student.Boolean); // Output: false

//Shallow Copying


//Deep coopying


/*
Student Management System
let student = {
  name: "Rohan",
  age: 19,
  department: "CSE",
  address: {
    city: "Delhi",
    zip: 110001
  }
};
Tasks:

Update the student's age to 20.

Add a new property email = "rohan@gmail.com".

Access and print the city from the nested address object.

Clone the object using the spread operator. Will modifying the cloned object's address.city affect the original?

Input format
No user input; operations are performed directly on the object.

Output format
Print the modified properties, the city, and test whether original data was affected after cloning and modification.
City: Delhi                                                                     
Original city: Mumbai                                                           
Cloned city: Mumbai                                                             
                     
*/