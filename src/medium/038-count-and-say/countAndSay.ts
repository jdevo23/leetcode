function countAndSay(n: number): string {
	if (n == 0) {
		return "";
	}

	function parseNum(num: string): string {
		let s = "";
		let current = num[0];
		let count = 1;

		for (let i = 1; i < num.length; i++) {
			if (current == num[i]) {
				count++;
				continue;
			}

			s += count;
			s += current;
			count = 1;
			current = num[i];
		}

		s += count;
		s += current;

		return s;
	}

	let i = 1;
	let result = "1";
	while (i < n) {
		result = parseNum(result);
		i++;
	}

	return result;
};

export default countAndSay;