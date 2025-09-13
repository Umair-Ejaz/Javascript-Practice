let numbers = [1, 2, 3, 4, 5];

let allPositive = numbers.every(n => n > 0);

console.log(allPositive); // true


let nums = [2, 4, 6, 8, 9];

let allEven = nums.every(n => n % 2 === 0);

console.log(allEven); // false (because 9 is odd)
