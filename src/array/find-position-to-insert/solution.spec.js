const fn = require("./solution");

const data = [
  [[1, 3, 5, 6], 5, 2],
  [[1, 3, 5, 6], 2, 1],
  [[1, 3, 5, 6], 7, 4],
  [[1, 3, 5, 6], 0, 0],
];

test.each(data)("Should return correct index", (array, value, expected) => {
  expect(fn(array, value)).toEqual(expected);
});
