const nonOverlapFn = require("./non-overlapping");
const overlapFn = require("./overlapping");

describe("Naive Non-Overlapping Approach", () => {
  test("should return non-overlapping occurrences", () => {
    expect(nonOverlapFn("aaaa", "aa")).toEqual(2);
  });
});

describe("Naive Overlapping Approach", () => {
  test("should return overlapping occurrences", () => {
    expect(overlapFn("aaaa", "aaa")).toEqual(2);
    expect(overlapFn("foofoobar", "foo")).toEqual(2);
  });
});
