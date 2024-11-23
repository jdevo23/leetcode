function jump(nums: number[]): number {
	let jumps = 0;
	let i = 0;

	while (i < nums.length - 1) {
		let j = i + nums[i];

		if (j >= nums.length - 1) {
			jumps++;
			break;
		}

		let biggest = j;
		j--;
		while (j > i) {
			if ((nums[j] + j) > (nums[biggest] + biggest)) {
				biggest = j;
			}
			j--;
		}
		i = biggest;
		jumps++;
	}

	return jumps;
};

export default jump;