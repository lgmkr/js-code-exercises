module.exports = (array, k) => {
  const counts = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum - k in counts) {
      count += counts[sum - k];
    }

    counts[sum] = (counts[sum] || 0) + 1;
  }
  return count;
};
