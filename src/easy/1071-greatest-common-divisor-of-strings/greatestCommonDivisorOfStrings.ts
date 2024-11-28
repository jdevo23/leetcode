function gcdOfStrings(str1: string, str2: string): string {
	if (str1 + str2 != str2 + str1) return "";

	let a = str1.length;
	let b = str2.length;

	while (b) {
		let temp = b;
		b = a % b;
		a = temp;
	}

	return str1.substring(0, a);
};

export default gcdOfStrings;