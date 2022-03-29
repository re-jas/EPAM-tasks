// Write a function for calculating the type of argument and type output to the console

function type_of_arguments() {
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

type_of_arguments(num, word, animals);
