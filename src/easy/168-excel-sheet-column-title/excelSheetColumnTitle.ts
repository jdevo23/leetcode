function convertToTitle(columnNumber: number): string {
    let result = "";

	let num = columnNumber;
	while (true) {
		if (num <= 26) {
			if (num > 0) {
				result = String.fromCharCode(num + 64).concat(result);
			}
			break;
		}

		const remainder = num % 26 || 26;
		result = String.fromCharCode(remainder + 64).concat(result);
		num -= remainder;
		num = num / 26;
	}

	return result;
};

export default convertToTitle;