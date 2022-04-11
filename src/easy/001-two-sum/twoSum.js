var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof obj[target - nums[i]] === "number") {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));  // output = [0,1]
console.log(twoSum([3, 2, 4], 6));       // output = [1,2]
console.log(twoSum([3, 3], 6));          // output = [0,1]
