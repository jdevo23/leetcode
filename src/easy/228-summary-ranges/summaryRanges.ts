function summaryRanges(nums: number[]): string[] {
	const ranges: string[] = [];

	let i = 0;
	while (i < nums.length) {
		let j = i + 1;
		while (j <= nums.length) {
			if (j < nums.length && nums[j] <= nums[j - 1] + 1) {
				j++;
				continue;
			}

			let s = "";
			s += nums[i];
			if (nums[j - 1] > nums[i]) {
				s += "->";
				s += nums[j - 1];
			}
			ranges.push(s);
			i = j;
			break;
		}
	}

	return ranges;
};

export default summaryRanges;