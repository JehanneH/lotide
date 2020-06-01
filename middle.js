const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let firstIndex = (array.length / 2) - 1;
    let secondIndex = (array.length / 2);
    return [array[firstIndex], array[secondIndex]];
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  }
};

module.exports = middle;

