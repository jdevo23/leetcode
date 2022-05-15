/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const k = [...nums.keys()];
  let index = -1;

  var recurse = function (keys) {
    const midpoint = Math.floor(keys.length / 2);
    const numValue = nums[keys[midpoint]];
    
    if (numValue == target) {
      index = keys[midpoint];
      return;
    }

    const splitA = keys.slice(0, midpoint);
    const splitB = keys.slice(midpoint + 1);

    if (splitA.length && target < numValue) {
      recurse(splitA);
    }
    
    if (splitB.length && target > numValue) {
      recurse(splitB);
    }

    return;
  };

  recurse(k);
  return index;
};

// expected output is index of target
console.log(search([-1, 0, 3, 5, 9, 12], (target = 9)));  // output == 4
console.log(search([-1, 0, 3, 5, 9, 12], (target = 2)));  // output == -1
console.log(search([2, 5], (target = 5)));                // output == 1
