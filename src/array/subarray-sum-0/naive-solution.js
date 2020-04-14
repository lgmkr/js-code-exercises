module.exports = (array) => {
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    if (array[i] === 0) {
      return true;
    }

    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum == 0) {
        return true;
      }
    }
  }

  return false;
};
