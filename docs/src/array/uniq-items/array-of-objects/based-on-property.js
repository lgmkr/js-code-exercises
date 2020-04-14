module.exports = (array, property) => {
  const uniques = [];
  const uniquenessMap = {};

  for (const element of array) {
    if (uniquenessMap[element[property]]) {
      continue;
    }

    uniquenessMap[element[property]] = true;
    uniques.push(element);
  }

  return uniques;
};
