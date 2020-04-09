const bruteForce = require("./brute-force");

describe("Reverse an array", () => {
  const array = [1, 2, 3, 4, 5, 6];
  const result = [6, 5, 4, 3, 2, 1];

  test("using brute force approach", () => {
    expect(bruteForce(array)).toEqual(result);
  });
});
