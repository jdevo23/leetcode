function missingNumber(nums: number[]): number {
    let subTotal = 0;
    let expectedTotal = nums.length;

    for (let i = 0; i < nums.length; i++) {
        expectedTotal += i;
        subTotal += nums[i];
    }

    return expectedTotal - subTotal;
};

export default missingNumber;