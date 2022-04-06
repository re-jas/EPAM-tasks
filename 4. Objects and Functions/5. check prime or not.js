// Write a function that determines whether a number is prime or not

function checkPrime(n) {
  if (n <= 1) {
    return `${n} is not prime`;
  }

  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      return `${n} is not prime`;
    } else {
      i += 1;
    }
  }
  return `${n} is prime`;
}

console.log(checkPrime(-1));
console.log(checkPrime(0));
console.log(checkPrime(1));
console.log(checkPrime(23));
console.log(checkPrime(26));
