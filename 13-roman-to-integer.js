const romanToInt = function (romanString) {
  let targetInteger = 0;

  const pairs = [
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

  const convert = function ([romanSubString, integer]) {
    if (romanString.includes(romanSubString)) {
      romanString = romanString.replace(romanSubString, "");
      targetInteger += integer;
    }
  };

  pairs.forEach((pair) => convert(pair));
  return targetInteger;
};
