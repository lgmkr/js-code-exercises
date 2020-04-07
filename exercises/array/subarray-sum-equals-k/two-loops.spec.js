const fn = require("./two-loops");

const array = [3, 4, -7, 1, 3, 3, 1, -4];
const k = 7;
const result = 4;

test("fn should counts subarray sum equals k", () => {
  expect(fn(array, k)).toEqual(result);
});
