module.exports = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target || target < array[i]) {
      return i;
    }
  }

  return array.length;
};
