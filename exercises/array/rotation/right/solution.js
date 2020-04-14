module.exports = (array, k) => {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
};
