const calc = (str) => {
  const n = str.length;
  return Math.floor((n * (n + 1)) / 2);
};

module.exports = (str, subStr) => {
  let total = calc(str);
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== subStr) {
      temp += str[i];
    } else {
      let tempTotal = calc(temp);
      total -= tempTotal;
      temp = "";
    }
  }

  if (temp) {
    let tempTotal = calc(temp);
    total -= tempTotal;
  }

  return total;
};
