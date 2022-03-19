let str_val = '6';
let bool_val = true;
let num_val = 9;

console.log("Addition");
console.log(`string(${str_val}) + boolean(${bool_val}) = ${str_val + bool_val}`);
console.log(`string(${str_val}) + number(${num_val}) = ${str_val + num_val}`);
console.log(`number(${num_val}) + boolean(${bool_val}) = ${num_val + bool_val}`);

console.log("\nMultiplication");
console.log(`string(${str_val}) * boolean(${bool_val}) = ${str_val * bool_val}`);
console.log(`string(${str_val}) * number(${num_val}) = ${str_val * num_val}`);
console.log(`number(${num_val}) * boolean(${bool_val}) = ${num_val * bool_val}`);

console.log("\nDivision");
console.log(`string(${str_val}) / boolean(${bool_val}) = ${str_val / bool_val}`);
console.log(`string(${str_val}) / number(${num_val}) = ${str_val / num_val}`);
console.log(`number(${num_val}) / boolean(${bool_val}) = ${num_val / bool_val}`);

console.log("\nExplicit conversion");
console.log(`string(${str_val}) to number(${num_val}) = ${Number(str_val)}`);
console.log(`number(${num_val} to string(${str_val}) = ${String(num_val)}`);
console.log(`string(${str_val}) to boolean(${bool_val}) = ${Boolean(str_val)}`);
