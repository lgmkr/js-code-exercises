const fn = require("./naive");

describe("Naive approach", () => {
  it("should return true if the string is a palindrome", () => {
    expect(fn("abba")).toBe(true);
  });

  it("should return false if the string isn't a palindrome", () => {
    expect(fn("table")).toBe(false);
  });
});
