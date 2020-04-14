module.exports = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return false;
    }
  }

  return true;
};
