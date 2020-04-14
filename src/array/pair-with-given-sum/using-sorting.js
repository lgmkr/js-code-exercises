module.exports = ([...array], sum) => {
  array.sort();

  let low = 0;
  let high = array.length - 1;

  while (low < high) {
    if (array[low] + array[high] === sum) {
      return true;
    }

    if (array[low] + array[high] < sum) {
      low++;
    } else {
      high--;
    }
  }

  return false;
};
