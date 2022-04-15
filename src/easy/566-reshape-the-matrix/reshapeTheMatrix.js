/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;

    if (m*n !== r*c) {
      return mat;
    }

    const concat = mat.reduce((acc, curr) => acc.concat(curr), []);

    const newArr = [];

    let i = 0;

    while (i < concat.length) {
      const itemsToAdd = concat.slice(i, i + (concat.length / r));
      newArr.push(itemsToAdd);
      i += concat.length / r;
    }

    return newArr;
};

console.log(matrixReshape([[1,2],[3,4]], r = 1, c = 4)); // output == [[1,2,3,4]]
console.log(matrixReshape([[1,2],[3,4]], r = 2, c = 4)); // output == [[1,2],[3,4]]
console.log(matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]], r = 42, c = 5)); // output == [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]