// 2nd highest element of array using inbuilt function

// const input = [2, 3, 0, 5, 9, 8, 7, 6, 3];
const input = [12, 12, 11, 2, 3, 4, 5, 6, 7, 8];
const result = input.length < 2 ? "Array must contain atleast 2 elements" : [...new Set(input)].sort((a,b)=>a-b).slice(-2).shift();
console.log(result);