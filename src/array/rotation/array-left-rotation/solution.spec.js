const { leftRotationN } = require("./solution");

const testRotation = [[1, 2, 3, 4, 5], 4, [5, 1, 2, 3, 4]];

test.each([testRotation])(
  "leftRotationN: input array %s and d = %s should equal %s",
  (array, k, expected) => {
    expect(leftRotationN(array, k)).toEqual(expected);
  }
);
