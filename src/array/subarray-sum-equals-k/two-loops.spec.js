const fn = require("./two-loops");

const array = [3, 4, 7, 2, -3, 1, 4, 2];
const k = 7;
const result = 4;

test("fn should counts subarray sum equals k", () => {
  expect(fn(array, k)).toEqual(result);
});
