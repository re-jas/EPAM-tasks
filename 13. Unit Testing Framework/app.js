const { should } = require("chai");

class Calculator {
  constructor() {
    console.log("Calculator initiate");
  }

  add() {
    this.validVariableType(...arguments);

    let sum = 0;
    for (let i of arguments) {
      sum += i;
    }
    return sum;
  }

  multiply() {
    this.validVariableType(...arguments);

    let multiplication = 1;
    for (let i of arguments) {
      multiplication *= i;
    }
    return multiplication;
  }

  validVariableType() {
    for (let i of arguments) {
      if (typeof i !== "number") {
        throw new Error(`"${i}" should be a number not ${typeof i}`);
      }
    }
  }
}

module.exports = Calculator;
