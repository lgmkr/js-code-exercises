const bruteForce = require("./brute-force");
const extraArray = require("./extra-array");
const recursionWithIndex = require("./recursion-index");
const recursionWithArray = require("./recursion-array-pop");

describe("Reverse an array", () => {
  const array = [1, 2, 3, 4, 5, 6];
  const result = [6, 5, 4, 3, 2, 1];

  test("Using 'brute force' approach", () => {
    expect(bruteForce([...array])).toEqual(result);
  });

  test("Using 'extra array' approach", () => {
    expect(extraArray([...array])).toEqual(result);
  });

  test("Using 'recursion' approach with index", () => {
    expect(recursionWithIndex([...array], 6)).toEqual(result);
  });

  test("Using 'recursion' approach with Array.prototype.pop", () => {
    expect(recursionWithArray([...array])).toEqual(result);
  });
});
