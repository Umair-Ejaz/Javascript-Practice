let arr = [1, [2, [3, [4]]]];

console.log(arr.flat());      // [1, 2, [3, [4]]]   (default depth = 1)
console.log(arr.flat(2));     // [1, 2, 3, [4]]    (2 levels deep)
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]   (all levels)


let nums = [1, 2, 3];

let result = nums.flatMap(x => [x, x * 2]);

console.log(result); // [1, 2, 2, 4, 3, 6]
