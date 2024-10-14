function longestCommonPrefix(strs: string[]): string {
    const split = strs[0].split('');
    let ptr = split.length;

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j <= ptr; j++) {
            if (strs[i][j] != split[j]) {
                ptr = j;
                break;
            }
        }
    }

    return split.slice(0, ptr).join('');
};

// TESTS
const testCases = [
    {
        arg: ["flower", "flow", "flight"],
        answer: "fl",
    },
    {
        arg: ["dog", "racecar", "car"],
        answer: "",
    },
    {
        arg: ["ab", "a"],
        answer: "a",
    },
    {
        arg: ["c", "acc", "ccc"],
        answer: "",
    },
];

testCases.forEach(({ arg, answer }) => {
    const returnedValue = longestCommonPrefix(arg);

    if (returnedValue === answer) {
		console.log(`PASSED: "${returnedValue}" == "${answer}".`);
        return;
    }

    console.log(`FAILED: "${returnedValue}" == "${answer}". You answered "${returnedValue}".`);
});