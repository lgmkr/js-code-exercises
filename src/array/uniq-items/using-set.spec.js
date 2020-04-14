const fn = require("./using-set");

const array = [1, 2, 2, 3, 3, 4, 5, 5, 6];
const result = [1, 2, 3, 4, 5, 6];

test("should return array of uniq items", () =>
  expect(result).toEqual(Array.from(fn(array))));
