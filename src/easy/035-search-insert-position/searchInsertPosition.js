function searchInsert(nums, target) {
    var index = nums.length;
    var i = 0;
    while (i < nums.length) {
        if (nums[i] >= target) {
            index = i;
            break;
        }
        i++;
    }
    return index;
}
;
// TESTS
var tests = [
    {
        nums: [1, 3, 5, 6],
        target: 5,
        output: 2,
    },
    {
        nums: [1, 3, 5, 6],
        target: 2,
        output: 1,
    },
    {
        nums: [1, 3, 5, 6],
        target: 7,
        output: 4,
    },
];
tests.forEach(function (_a) {
    var nums = _a.nums, target = _a.target, output = _a.output;
    var result = searchInsert(nums, target);
    var str = result == output ? 'PASSED' : 'FAILED';
    str += ": Expected ".concat(output, ". You entered ").concat(result);
    console.log(str);
});
