const fn = require("./solution");

test("should rotate array right 2 times", () => {
  expect(fn([4, 5, 6], 2)).toEqual([5, 6, 4]);
});
