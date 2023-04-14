// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.

// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

const romanToInt = function (s) {
  let int = 0;
  let string = s;
  const transform = function ([a, b]) {
    if (string.includes(a)) {
      int += b;
      string = string.replace(a, "");
    }
  };
  const relationships = [
    ["MMM", 3000],
    ["MM", 2000],
    ["CM", 900], // changed order
    ["M", 1000],
    ["DCCC", 800],
    ["DCC", 700],
    ["DC", 600],
    ["CD", 400], // changed order
    ["D", 500],
    ["CCC", 300],
    ["CC", 200],
    ["XC", 90],
    ["C", 100],
    ["LXXX", 80],
    ["LXX", 70],
    ["LX", 60],
    ["XL", 40], // changed order
    ["L", 50],
    ["XXX", 30],
    ["XX", 20],
    ["IX", 9], // changed order
    ["X", 10],
    ["VIII", 8],
    ["VII", 7],
    ["VI", 6],
    ["IV", 4],
    ["V", 5],
    ["III", 3],
    ["II", 2],
    ["I", 1],
  ];
  relationships.forEach((array) => transform(array));
  return int;
};
