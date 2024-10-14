// attempt to complete without using array or string methods

function strStr(haystack: string, needle: string): number {
    let result = -1;
	let ptrA = 0;
	let ptrB = 0;

	while (ptrA <= (haystack.length - needle.length)) {
		if (haystack[ptrA] == needle[0]) {
			ptrB = ptrA;
			let ptrC = 0;
			let match = false;

			while (ptrC < needle.length) {
				if (haystack[ptrB] != needle[ptrC]) {
					break;
				}

				if (ptrC == needle.length - 1) {
					match = true;
				};

				ptrB++;
				ptrC++;
			}

			if (match) {
				result = ptrA;
				break;
			}
		}

		ptrA++;
	}

    return result;
};

// TESTS
const tests = [
    {
        haystack: "sadbutsad",
        needle: "sad",
        ans: 0,
    },
    {
        haystack: "leetcode",
        needle: "leeto",
        ans: -1,
    },
    {
        haystack: "a",
        needle: "a",
        ans: 0,
    },
];

tests.forEach(({ haystack, needle, ans }) => {
    const result = strStr(haystack, needle);

    if (result === ans) {
        console.log(`PASSED: expected ${ans}. You entered ${result}.`);
        return;
    }

    console.log(`FAILED: expected ${ans}. You entered ${result}.`);
});