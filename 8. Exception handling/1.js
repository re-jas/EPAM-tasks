// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - 'let must be declared' before use.

try {
  console.log(a);
  let a = 3;
} catch (e) {
  if (e.name == "ReferenceError") {
    console.log("let must be declared");
  }
}

// When running 1/0, the error 'cannot be divided by zero'

try {
  let a = 1 / 0;
  console.log(a);
} catch (e) {
  if (e.name == "Infinity") {
    console.log("cannot be divided by zero");
  }
}
