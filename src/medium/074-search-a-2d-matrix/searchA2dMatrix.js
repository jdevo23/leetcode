/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binaryTreeQuery = function(array, target) {
  if (array.length === 1) {
    return array[0] === target;
  }

  const m = array.length;
  const subTreeLeft = array.slice(0, m/2);
  const subTreeRight = array.slice(m/2);

  return binaryTreeQuery(subTreeLeft[subTreeLeft.length - 1] >= target ? subTreeLeft : subTreeRight, target);
}

var searchMatrix = function(matrix, target) {
  const array = matrix.reduce((acc, curr) => acc.concat(curr), []);
  return binaryTreeQuery(array, target);
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));    // output == true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));   // output == false