module.exports = function getZerosCount(number) {
  let result = 0;
  let copy = number;
  while (copy >= 5){
      copy = Math.trunc(copy/5);
      result += copy;
  }
  return result;
}
