/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const output = [];
  let i = 0;

  while (i < numRows) {
    const temporaryArray = new Array(i + 1).fill(1);
    
    if (i >= 2) {
      for (let j = 1; j < temporaryArray.length - 1; j++) {
        temporaryArray[j] = output[i - 1][j - 1] + output[i - 1][j];
      }
    }

    output.push(temporaryArray);

    i++;
  }

  return output;
};

console.log(generate(1)); // output == [[1]]
console.log(generate(5)); // output == [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]