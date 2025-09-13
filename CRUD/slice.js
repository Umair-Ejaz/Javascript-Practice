let fruits = ["apple", "banana", "cherry", "date", "mango"];

// Slice from index 1 to 3 (3 is not included)
let sliced = fruits.slice(1, 3);

console.log("Original:", fruits); // ["apple", "banana", "cherry", "date", "mango"]
console.log("Sliced:", sliced);   // ["banana", "cherry"]


let numbers = [10, 20, 30, 40, 50];

// Copy first 3 elements
let part = numbers.slice(0, 3);

console.log(part); // [10, 20, 30]
