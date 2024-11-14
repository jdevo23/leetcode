function searchRange(nums: number[], target: number): number[] {
	if (!nums.length) {
		return [-1, -1];
	}

	function bSearch(l: number, r: number): number[] {
		const c = Math.floor((l + r) / 2);

		if (nums[c] > target) {
			if (l == r || c == 0) {
				return [-1, -1];
			}
			let newR = c - 1;
			return bSearch(l, newR);
		} else if (nums[c] < target) {
			if (l == r || c + 1 >= nums.length) {
				return [-1, -1];
			}
			let newL = c + 1;
			return bSearch(newL, r);
		} else {
			let i = c;
			let j = c;
			while (nums[i] === nums[c]) {
				i--;
			}
			while (nums[j] === nums[c]) {
				j++;
			}
			return [i + 1, j - 1];
		}
	}

	return bSearch(0, nums.length - 1);
};

export default searchRange;