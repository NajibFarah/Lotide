const assertArraysEqual = function(actual, expected) {
    if (actual, expected) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  };

const eqArrays = function(array1, array2) {
    for (let i in array1) {
        console.log ("Array1", array1[i])
        console.log ("Array2", array2[i])
        if (array1[i]!==array2[i]) {
            return false
        }
    }
return true
} 
const middle = function(array) {
    let array_result = []; 
    if (array.length <= 2 && array.length > 0) {
      return array_result;
    } else if (array.length % 2 === 0) {
        return array_result = [array[(array.length / 2) - 1], array[array.length / 2]];
      } else {
        return array_result = array[(array.length - 1) / 2];
      }
  };
  
  module.exports = middle;
