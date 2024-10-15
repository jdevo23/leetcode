function searchInsert(nums: number[], target: number): number {
    let num = 0;
    let i = 0;
    let j = nums.length;
    let mid = Math.floor(nums.length / 2);

    while (i <= mid && j >= mid) {
        if (nums[i] >= target) {
            num = i;
            break;
        }

        if (nums[j - 1] <= target) {
            num = nums[j - 1] < target ? j : j - 1;
            break;
        }

        i++;
        j--;
    }

    return num;
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
    {
        nums: [1],
        target: 2,
        output: 1,
    },
    {
        nums: [1,3],
        target: 3,
        output: 1,
    },
    {
        nums: [1,3,5],
        target: 4,
        output: 2,
    },
];

tests.forEach(({ nums, target, output }) => {
    const result = searchInsert(nums, target);

    let str = result == output ? 'PASSED' : 'FAILED';
    str += `: Expected ${output}. You entered ${result}`;

    console.log(str);
});