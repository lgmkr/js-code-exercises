module.exports = (array) => {
  let tempArray = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    tempArray[i] = array[length - i - 1];
  }

  return tempArray;
};
