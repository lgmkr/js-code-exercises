const { subarraySum } = require("./solution");

// const data = [[[1, 1, 1, 1], 2, 4], [[10, 2, -2, -20, 10], -10, 3]];
const data = [[[10, 2, -2, -20, 10], -10, 3]];
test.each(data)(
  "input array %s and k = %s should equal %s",
  (nums, k, expected) => {
    expect(subarraySum(nums, k)).toEqual(expected);
  }
);
