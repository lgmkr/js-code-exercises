// EXPLANATION:
//[array[6 - 1]]
//  .concat([array[5 - 1]])
//  .concat([array[4 - 1]])
//  .concat([array[3 - 1]])
//  .concat([array[2 - 1]])
//  .concat([array[1 - 1]])
//  .concat([])

const fn = (array, length) => {
  if (length === 0) {
    return [];
  }
  return [array[length - 1]].concat(fn(array, --length));
};

module.exports = fn;
