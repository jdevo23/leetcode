function reverseWords(s: string): string {
	let result = "";

	let i = 0;
	let temp = "";
	while (i <= s.length) {
		if (s[i] == ' ' || s[i] == undefined) {
			if (temp) {
				if (result) {
					result = temp + " " + result;
				} else {
					result = temp;
				}
				temp = "";
			}
		} else {
			temp += s[i];
		}

		i++;
	}

	return result;
};

export default reverseWords;