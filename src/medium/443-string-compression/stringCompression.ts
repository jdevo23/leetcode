function compress(chars: string[]): number {
	let i = 0;

	while (i < chars.length) {
		let count = 0;
		let j = i + 1;
		while (chars[i] == chars[j]) {
			count++;
			j++;
		}
		if (count == 0) {
			i++;
			continue;
		} else {
			const strArr = ("" + (count + 1)).split('');
			chars.splice(i + 1, count, ...strArr);
			i += strArr.length + 1;
			continue;
		}
	}

	return chars.length;
};

export default compress;