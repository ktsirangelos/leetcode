const isPalindrome = function (integer) {
  const string = integer.toString();
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};
