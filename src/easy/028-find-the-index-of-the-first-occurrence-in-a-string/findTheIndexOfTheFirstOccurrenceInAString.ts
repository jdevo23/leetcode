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

export default strStr;