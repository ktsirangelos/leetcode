const getIndices = function (arrayOfIntegers, targetInteger) {
  for (let i = 0; i <= arrayOfIntegers.length; i++) {
    for (let j = i + 1; j <= arrayOfIntegers.length; j++) {
      if (arrayOfIntegers[i] + arrayOfIntegers[j] === targetInteger) {
        return [i, j];
      }
    }
  }
};
