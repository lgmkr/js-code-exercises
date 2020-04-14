const simpleFn = require("./simple");
const recursionFn = require("./recursion");

describe("Naive approach", () => {
  it("should return true if the array is a palindrome", () => {
    expect(simpleFn([1, 2, 2, 1])).toBe(true);
  });

  it("should return false if the array isn't a palindrome", () => {
    expect(simpleFn([1, 2, 2, 2])).toBe(false);
  });
});

describe("Using recursion", () => {
  it("should return true if the array is a palindrome", () => {
    expect(recursionFn([1, 2, 2, 1])).toBe(true);
  });

  it("should return false if the array isn't a palindrome", () => {
    expect(recursionFn([1, 2, 2, 2])).toBe(false);
  });
});
