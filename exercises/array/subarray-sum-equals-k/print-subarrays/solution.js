module.exports = (array, k) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let tempArr = [];
    let sum = 0;

    for (let j = i; j < array.length; j++) {
      sum += array[j];
      tempArr.push(array[j]);

      if (sum === k) {
        result.push([...tempArr]);
      }
    }
  }

  return result;
};
