const naiveFn = require("./naive-solution");
const usingSetFn = require("./using-set");

describe("Naive approach", () => {
  test("should return true if subarray with sum exists", () =>
    expect(naiveFn([3, 4, -7, 3, 1, 3, 1, -4, -2, -2])).toEqual(true));

  test("should return false if subarray with sum exists", () =>
    expect(naiveFn([1, 2, 3, 4, 5])).toEqual(false));
});

describe("using Set", () => {
  test("should return true if subarray with sum exists", () =>
    expect(usingSetFn([3, 4, -7, 3, 1, 3, 1, -4, -2, -2])).toEqual(true));

  test("should return false if subarray with sum exists", () =>
    expect(usingSetFn([1, 2, 3, 4, 5])).toEqual(false));
});
