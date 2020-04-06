const fn = require("./based-on-property");

const array = [
  { thing: "table" },
  { thing: "chair" },
  { thing: "table" },
  { thing: "pill" },
];

const expected = [{ thing: "table" }, { thing: "chair" }, { thing: "pill" }];

test("should return filtered array", () => {
  expect(fn(array, "thing")).toEqual(expected);
});
