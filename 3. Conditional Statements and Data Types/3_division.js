// Divide different types (string / boolean, string / number, number / Boolean)

let str_val = "seven";
let bool_val = true;
let num_val = 6;

console.log("======DIVISION======");
console.log(`str(${str_val}) / bool(${bool_val}) = ${str_val / bool_val}`);  // string / boolean
console.log(`str(${str_val}) / numb(${num_val}) = ${str_val / num_val}`);  // string / number
console.log(`num(${num_val}) / bool(${bool_val}) = ${num_val / bool_val}`);  // number / Boolean
