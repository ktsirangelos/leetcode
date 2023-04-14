// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = function (x) {
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
