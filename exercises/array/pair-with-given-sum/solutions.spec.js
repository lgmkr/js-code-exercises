const twoLoops = require("./two-loops");
const usingSorting = require("./using-sorting");
const usingHashmap = require("./using-hashmap");

const data = [
  [[1, 2, 3, 4, 9, 10, 11, 12, 14, 15, 21, 24], 25, true],
  [[1, 2, 3, 4, 9, 10, 11, 12, 14, 15, 21, 24], 100, false],
];

test.each(data)(
  "should return true if pair find or false using two loops",
  (array, sum, result) => {
    expect(twoLoops(array, sum)).toBe(result);
  }
);

test.each(data)(
  "should return true if pair find or false using sorting",
  (array, sum, result) => {
    expect(usingSorting(array, sum)).toBe(result);
  }
);

test.each(data)(
  "should return true if pair find or false using sorting",
  (array, sum, result) => {
    expect(usingHashmap(array, sum)).toBe(result);
  }
);
