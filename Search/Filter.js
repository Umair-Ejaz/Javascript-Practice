let users = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "Umair", active: true }
];

let activeUsers = users.filter(u => u.active);

console.log(activeUsers);
// [
//   { id: 1, name: "Ali", active: true },
//   { id: 3, name: "Umair", active: true }
// ]
