const isPalindrome = function (x) {
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
