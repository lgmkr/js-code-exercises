const recursion = (line, n) => {
  if (n == 0) {
    return "";
  }

  return line[n - 1] + recursion(line, --n);
};

module.exports = recursion;
