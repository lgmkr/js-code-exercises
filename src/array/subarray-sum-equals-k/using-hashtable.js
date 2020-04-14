module.exports = (array, k) => {
  const sumMap = new Map();
  let count = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    if (currentSum === k) {
      count++;
    }

    if (sumMap.has(currentSum - k)) {
      count += sumMap.get(currentSum - k);
    }

    let total = sumMap.get(currentSum);

    if (!total) {
      sumMap.set(currentSum, 1);
    } else {
      sumMap.set(currentSum, total + 1);
    }
  }
  return count;
};
