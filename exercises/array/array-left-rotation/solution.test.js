const { leftRotationN } = require("./solution");

const testRotation = [
  [1, 2, 3, 4, 5],
  [5, 1, 2, 3, 4],
];

test.each([[testRotation[0], 4, testRotation[1]]])(
  "leftRotationN: input array %s and d = %s should equal %s",
  (nums, k, expected) => {
    expect(leftRotationN(nums, k)).toEqual(expected);
  }
);
