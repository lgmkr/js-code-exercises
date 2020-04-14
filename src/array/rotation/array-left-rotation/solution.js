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

const leftRotation = (arr) => {
  const leftMost = arr[0];
  const len = arr.length;

  for (i in [...Array(10).keys()]) {
    arr[i], (arr[i + 1] = arr[i + 1]), arr[i];
    console.log(arr);
  }
};
module.exports = {
  leftRotationN,
  leftRotation,
};
