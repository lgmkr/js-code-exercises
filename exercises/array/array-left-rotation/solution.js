// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .
//Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

const leftRotationN = (array, rotation) => {
  const result = [];
  let i = rotation;
  result.push(array[rotation]);

  for (f = 0; f < array.length - 1; f++) {
    i++;
    if (array[i] === undefined) {
      i = 0;
    }
    result.push(array[i]);
  }

  return result;
};

const leftRotation = arr => {
  const leftMost = arr[0];
  const len = arr.length;

  for (i in [...Array(10).keys()]) {
    arr[i], (arr[i + 1] = arr[i + 1]), arr[i];
    console.log(arr);
  }
};
module.exports = {
  leftRotationN,
  leftRotation
};
