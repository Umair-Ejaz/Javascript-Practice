
//Removing element
let fruits = ["apple", "banana", "cherry", "date"];

// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2);

console.log("After splice:", fruits);   // ["apple", "date"]
console.log("Removed elements:", removed); // ["banana", "cherry"]


//adding element
let numbers = [1, 2, 5, 6];

// At index 2, remove 0 elements, then add 3 and 4
numbers.splice(2, 0, 3, 4);

console.log(numbers); // [1, 2, 3, 4, 5, 6]


//Replacing element
let colors = ["red", "blue", "yellow"];

// At index 1, remove 1 element ("blue") and insert "green"
colors.splice(1, 1, "green");

console.log(colors); // ["red", "green", "yellow"]



//removing element

let letters = ["a", "b", "c", "d", "e"];

// Remove everything from index 2 onwards
let removedAll = letters.splice(2);

console.log("After splice:", letters);    // ["a", "b"]
console.log("Removed elements:", removedAll); // ["c", "d", "e"]
