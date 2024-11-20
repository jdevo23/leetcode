function hIndex(citations: number[]): number {
	citations.sort((a, b) => a - b);
	const length = citations.length;
	let result = 0;
	let i = length;
	while (i > 0) {
		if (citations[length - i] >= i) {
			result = i;
			break;
		}
		i--;
	}
	return result;
};

export default hIndex;