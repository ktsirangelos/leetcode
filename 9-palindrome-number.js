// Given an integer, return true if it is a palindrome and false otherwise.

const isPalindrome = function (integer) {
  const string = integer.toString();
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};
