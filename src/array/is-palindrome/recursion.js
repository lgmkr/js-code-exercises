const isPalindrome = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return true;
  }

  if (array[start] === array[end]) {
    return isPalindrome(array, start + 1, end - 1);
  } else {
    return false;
  }
};

module.exports = isPalindrome;
