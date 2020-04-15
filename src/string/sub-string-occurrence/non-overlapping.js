module.exports = (str, subStr) => {
  let count = 0;
  let position = 0;
  const step = subStr.length;

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
