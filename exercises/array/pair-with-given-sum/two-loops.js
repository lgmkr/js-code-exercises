module.exports = (array, sum) => {
  const length = array.length;

  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }

  return false;
};
