module.exports = (line) => {
  for (let i = 0; i < line.length / 2; i++) {
    if (line[i] !== line[line.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
