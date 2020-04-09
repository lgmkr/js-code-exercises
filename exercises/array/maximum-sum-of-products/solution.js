module.exports = (arrayA, arrayB) => {
  arrayA.sort();
  arrayB.sort();

  let sum = 0;

  for (let i = 0; i < arrayA.length; i++) {
    sum += arrayA[i] * arrayB[i];
  }

  return sum;
};
