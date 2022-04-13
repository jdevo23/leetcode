/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let max = 0,
    l = 0,
    r = 1,
    len = prices.length;

  while (r < len) {
    if (prices[r] > prices[l]) {
      max = Math.max(max, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // output == 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // output == 0
console.log(maxProfit([1, 2]));             // output == 1
