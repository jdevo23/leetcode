/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const array = [];
  const dict = {};

  nums1.forEach(n => dict[n] = (dict[n] ? dict[n] + 1 : 1));

  for (let i = 0; i < nums2.length; i++) {
    if (dict[nums2[i]] > 0) {
      array.push(nums2[i]);
      dict[nums2[i]] = dict[nums2[i]] - 1;
    }
  }

  return array;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));       // output == [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // output == [4,9] || [9,4]
