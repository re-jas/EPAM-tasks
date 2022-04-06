class Calculator {
  constructor() {
    console.log("Calculator initiate");
  }

  add() {
    let sum = 0;
    for (let i of arguments) {
      sum += i;
    }
    return sum;
  }

  multiply() {
    let sum = 1;
    for (let i of arguments) {
      sum *= i;
    }
    return sum;
  }
}

module.exports = Calculator;
