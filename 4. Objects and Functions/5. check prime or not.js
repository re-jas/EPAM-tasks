// Write a function that determines whether a number is prime or not

function checkPrime(n) {
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (n % i == 0) {
      return `${n} isn't prime`;
    } else {
      i += 1;
    }
  }
  return `${n} is prime`;
}

console.log(checkPrime(77));
console.log(checkPrime(79));
console.log(checkPrime(1243));
console.log(checkPrime(1237));
