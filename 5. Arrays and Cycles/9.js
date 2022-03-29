// Implement a loop that prints prime numbers to the console

let x = 20;
for (let i = 2; i < x; i++) {
  let numIsPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      numIsPrime = false;
      break;
    }
  }
  if (numIsPrime) console.log(i);
}
