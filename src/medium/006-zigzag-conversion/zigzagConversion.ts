function convert(s: string, numRows: number): string {
	if (numRows == 1) {
		return s;
	}

	const strings: string[] = Array.from({ length: numRows }, () => "");
	let increasing = true;
	let idx = 0;

	for (let i = 0; i < s.length; i++) {
		strings[idx] += s[i];
		if (idx == 0) {
			increasing = true;
		} else if (idx == numRows - 1) {
			increasing = false;
		}
		idx += increasing ? 1 : -1;
	}

	return strings.reduce((acc, curr) => acc += curr, "");
};

export default convert;