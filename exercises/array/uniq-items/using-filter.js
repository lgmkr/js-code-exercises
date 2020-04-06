// Using filter array method
module.exports = (array) =>
  array.filter((element, i) => array.indexOf(element) === i);
