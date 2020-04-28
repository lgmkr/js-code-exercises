function recursion(str) {
  if (str.length === 0) {
    return "";
  }

  return (
    str.substring(str.length, str.length - 1) +
    recursion(str.substring(0, str.length - 1))
  );
}
module.exports = recursion;
