let numbers = [1, 2, 3, 4];

let doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original not changed)


let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Umair" }
];

let names = users.map(u => u.name);

console.log(names); // ["Ali", "Sara", "Umair"]
