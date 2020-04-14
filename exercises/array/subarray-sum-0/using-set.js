module.exports = (array) => {
  const sumSet = new Set();

  sumSet.add(0);

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sumSet.has(sum)) {
      return true;
    }

    sumSet.add(sum);
  }

  return false;
};
