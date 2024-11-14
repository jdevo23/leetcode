function reverseVowels(s: string): string {
    let result = s.split("");

	const vowels = ["a", "e", "i", "o", "u"];

	let l = 0;
	let r = result.length - 1;

	while (l < r) {
		if (vowels.includes(result[l].toLowerCase())) {
			while (l < r) {
				if (vowels.includes(result[r].toLowerCase())) {
					const a = result[l];
					const b = result[r];
					result[l] = b;
					result[r] = a;
					r--;
					break;
				}
				r--;
			}
		}
		l++;
	}

	return result.join("");
};

export default reverseVowels;