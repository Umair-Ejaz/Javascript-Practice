let users = [
  { id: 1, name: "Sara", age: 25 },
  { id: 2, name: "Ali", age: 30 },
  { id: 3, name: "Umair", age: 20 }
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);

console.log(users);
/*
[
  { id: 3, name: "Umair", age: 20 },
  { id: 1, name: "Sara", age: 25 },
  { id: 2, name: "Ali", age: 30 }
]
*/
