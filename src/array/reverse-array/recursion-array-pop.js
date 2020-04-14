const fn = (array) => {
  if (!array.length) {
    return [];
  }

  return [array.pop()].concat(fn(array));
};

module.exports = fn;
