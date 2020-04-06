module.exports = (array) =>
  array.reduce(
    (acc, element) => (acc.includes(element) ? acc : [...acc, element]),
    []
  );
