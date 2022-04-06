const assert = require("chai").assert;
const Calculator = require("../app");

describe("Calculator Test", function () {
  let calculator = new Calculator();

  it("addition of two parameters", function () {
    assert.strictEqual(calculator.add(3, 5), 8);
    assert.strictEqual(calculator.add(15, 24), 39);
  });

  it("multiplication of two parameters", function () {
    assert.strictEqual(calculator.multiply(3, 5), 15);
    assert.strictEqual(calculator.multiply(15, 24), 360);
  });

  it("addition of several parameters", function () {
    assert.strictEqual(calculator.add(5, 87, 21, 10), 123);
  });

  it("multiplication of several parameters", function () {
    assert.strictEqual(calculator.multiply(35, 78, 21, 13), 745290);
  });
});
