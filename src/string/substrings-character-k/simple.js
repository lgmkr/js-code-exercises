module.exports = (str, subStr) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      let sub = str.slice(i, j);

      if (sub.includes(subStr)) {
        count++;
      }
    }
  }
  return count;
};
