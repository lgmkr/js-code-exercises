const fn = require("./solution");

test("Test", () => {
  expect(fn([3, 4, -7, 1, 3, 3, 1, -4], 7)).toEqual([
    [3, 4],
    [3, 4, -7, 1, 3, 3],
    [1, 3, 3],
    [3, 3, 1],
  ]);
});
