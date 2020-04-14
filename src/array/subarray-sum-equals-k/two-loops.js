module.exports = (array, k) => {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    let sum = 0;

    for (j = i; j < array.length; j++) {
      sum += array[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};
