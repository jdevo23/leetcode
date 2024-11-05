function letterCombinations(digits: string): string[] {
    const combs: string[] = [];

	if (!digits.length) return combs;

	function parseNumber(digit: string) {
		const d = Number(digit);
		const len = (d == 7 || d == 9) ? 4 : 3;
		let str = "";

		let n = (d - 2) * 3;
		d > 7 && n++;

		for (let i = 0; i < len; i++) {
			str += String.fromCharCode(n + i + 97);
		}

		return str;
	}

    function recurse(currentString: string, remainingString: string) {
		if (currentString.charCodeAt(0) >= 97) {
			if (currentString.length == digits.length) {
				combs.push(currentString);
				return;
			}
		}

		let chars = parseNumber(remainingString[0]);

		for (let i = 0; i < chars.length; i++) {
			recurse(currentString + chars[i], remainingString.slice(1));
		}
    }

	recurse("", digits);

    return combs;
};

export default letterCombinations;