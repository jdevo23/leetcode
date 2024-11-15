function addDigits(num: number): number {
	function reduce(n: number): number {
		if (n < 10) {
			return n;
		}
		const nStr = n.toString();
		let newN = 0;
		for (let i = 0; i < nStr.length; i++) {
			newN += Number(nStr[i]);
		}
		return reduce(newN);
	}
	return reduce(num);
};

export default addDigits;