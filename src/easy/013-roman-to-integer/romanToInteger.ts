function romanToInt(s: string): number {
	const numerals = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	};

	let sum = 0;
	let i = 0;

	while (i < s.length) {
		const char = s[i];
		const next = i < s.length + 1 ? s[i + 1] : undefined;

		let num = numerals[char as keyof typeof numerals];

		if (next) {
			if (char == "I") {
				if (next == "V" || next == "X") {
					num *= -1;
				}
			} else if (char == "X") {
				if (next == "L" || next == "C") {
					num *= -1;
				}
			} else if (char == "C") {
				if (next == "D" || next == "M") {
					num *= -1;
				}
			}
		}

		sum += num;

		i++;
	}

    return sum;
};

// TESTS
const testVals = [
	{
		val: "III",
		ans: 3,
	},
	{
		val: "LVIII",
		ans: 58,
	},
	{
		val: "MCMXCIV",
		ans: 1994,
	},
];

testVals.forEach(({ val, ans }) => {
	let passed = true;
	const answer = romanToInt(val);

	if (ans !== answer) {
		passed = false;
	}
	
	if (passed) {
		console.log(`PASSED: ${val} == ${answer}`);
		return;
	}

	console.log(`FAILED: ${val} == ${ans}. You entered ${answer}.`);
	return;
});