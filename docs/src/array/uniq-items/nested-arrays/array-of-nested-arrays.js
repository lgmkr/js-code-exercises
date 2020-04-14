module.exports = (array) => {
  const uniques = [];
  const items = {};

  for (const subArray of array) {
    const key = subArray.toString();
    if (items[key]) {
      continue;
    }

    uniques.push(subArray);
    items[key] = true;
  }

  return uniques;
};
