// Write a function for calculating the type of argument and type output to the console

function typeOfArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments[i]);
  }
}

let num = 15;
let word = "hello";
let animals = {
  wolf: 2,
  tiger: 4,
};

typeOfArguments(num, word, animals);
