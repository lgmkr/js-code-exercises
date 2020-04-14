const fn = require("./array-of-nested-arrays");

const array = [
  [10, 11],
  [12, 13],
  [10, 11],
  [15, 16],
  [15, 16],
];

const result = [
  [10, 11],
  [12, 13],
  [15, 16],
];

test("should return array of unique nested arrays", () =>
  expect(fn(array)).toEqual(result));
