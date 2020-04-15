module.exports = (str, subStr) => {
  let count = 0;
  let position = 0;
  const step = 1;

  while (true) {
    position = str.indexOf(subStr, position);
    if (position >= 0) {
      ++count;
      position += step;
    } else {
      break;
    }
  }

  return count;
};
