function searchInsert(nums: number[], target: number): number {
    let index = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target ) {
            index = i;
            break;
        }
    }

    return index;
};


// TESTS
const tests = [
    {
        nums: [1,3,5,6],
        target: 5,
        output: 2,
    },
    {
        nums: [1,3,5,6],
        target: 2,
        output: 1,
    },
    {
        nums: [1,3,5,6],
        target: 7,
        output: 4,
    },
];

tests.forEach(({ nums, target, output }) => {
    const result = searchInsert(nums, target);

    let str = result == output ? 'PASSED' : 'FAILED';
    str += `: Expected ${output}. You entered ${result}`;

    console.log(str);
});