// Given the string '2 + 3 223 2223'.
// Write a regex that finds line 2 + 3 without capturing the rest

let testStr2 = "2 + 3 223 2223";
let testRegex2 = /^2\s.\s3/g;
console.log(testStr2.match(testRegex2));
