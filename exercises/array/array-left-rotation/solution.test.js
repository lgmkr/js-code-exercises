const { leftRotationN } = require("./solution");

const data = [[[1, 2, 3, 4, 5], 4, [5, 1, 2, 3, 4]]];
test.each(data)(
  "leftRotationN: input array %s and d = %s should equal %s",
  (nums, k, expected) => {
    expect(leftRotationN(nums, k)).toEqual(expected);
  }
);

const testRotation = [
  [
    [1, 2, 3, 4, 5],
    [5, 1, 2, 3, 4],
  ],
];
