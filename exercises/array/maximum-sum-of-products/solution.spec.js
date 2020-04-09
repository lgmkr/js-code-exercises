const fn = require("./solution");

const data = [
  [[1, 2, 3], [5, 4, 3], 26],
  [[4, 7, 5, 2], [2, 3, 2, 1], 41],
];

test.each(data)(
  "Shall return maximum sum of products",
  (arrayA, arrayB, sum) => {
    expect(fn(arrayA, arrayB)).toEqual(sum);
  }
);
