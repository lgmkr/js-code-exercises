const recursionFn = require("./recursion");
const recursionSubstrFn = require("./recursion-substring");

it("should reverse the string", () => {
  expect(recursionFn("table", 5)).toEqual("elbat");
});

it("should reverse the string", () => {
  expect(recursionSubstrFn("table")).toEqual("elbat");
});
