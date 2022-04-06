// Write a function that takes two parameters - an array and
// a number and outputs the index of an array element equal to a number

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
let findNum = (arr, num) => `${num} in inedx ${arr.indexOf(num)}`;
console.log(findNum(arr, 8));
