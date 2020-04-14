module.exports = (array) => {
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]];
  }
  return array;
};
