// Perform explicit conversion (number, string, boolean)

let str_val = "seven";
let bool_val = true;
let num_val = 6;

console.log("====Explicit Conversion====");
console.log(`string(${str_val}) to number(${num_val}) = ${Number(str_val)}`);  // str >> num
console.log(`number(${num_val}) to string(${str_val}) = ${String(num_val)}`);  // num >> str
console.log(`string(${str_val}) to boolean(${bool_val}) = ${Boolean(str_val)}`);  // str >> bool
