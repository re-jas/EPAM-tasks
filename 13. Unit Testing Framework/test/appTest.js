const assert = require("chai").assert;
const expect = require("chai").expect;
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

  it("negative scenario with invalid data type", function () {
    assert.throws(
      () => calculator.add(5, "asd", 10),
      '"asd" should be a number not string'
    );
    assert.throws(
      () => calculator.multiply(1, 3, [5, 7]),
      '"5,7" should be a number not object'
    );
  });
});
