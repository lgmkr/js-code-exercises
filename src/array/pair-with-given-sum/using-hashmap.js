module.exports = (array, sum) => {
  const hashMap = new Set();
  for (const item of array) {
    if (hashMap.has(sum - item)) {
      return true;
    }
    hashMap.add(item);
  }

  return false;
};
