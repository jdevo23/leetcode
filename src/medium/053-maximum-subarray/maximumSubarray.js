var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const m = Math.round(nums.length / 2);

  const leftMSS = maxSubArray(nums.slice(0, m));
  const rightMSS = maxSubArray(nums.slice(m));

  let leftSum = Number.MIN_SAFE_INTEGER;
  let rightSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = m; i < nums.length; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  sum = 0;

  for (let i = m - 1; i >= 0; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  const ans = Math.max(leftMSS, rightMSS);

  return Math.max(ans, leftSum + rightSum);
};
