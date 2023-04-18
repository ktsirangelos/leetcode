// 1. Two Sum

// Given an array of integers and an target integer, return the indices of two integers which add up to the target.

const twoSum = function (array, target) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};
