let numbers = [5, 8, 12, 15, 20];

let result = numbers.find(num => num > 10);

console.log(result); // 12 (first match only)



//Find even num

let nums = [1, 3, 7, 10, 12];

let firstEven = nums.find(n => n % 2 === 0);

console.log(firstEven); // 10
