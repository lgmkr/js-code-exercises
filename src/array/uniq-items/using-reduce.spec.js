const fn = require("./using-reduce");

test("should return only uniq numbers", () => {
  const array = [1, 2, 3, 3, 4, 4, 5, 6];
  const result = [1, 2, 3, 4, 5, 6];

  expect(fn(array)).toEqual(result);
});

test("should return only uniq words", () => {
  const array = ["planet", "fork", "fork", "spoon", "table", "chair", "chair"];
  const result = ["planet", "fork", "spoon", "table", "chair"];

  expect(fn(array)).toEqual(result);
});
