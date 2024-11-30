function increasingTriplet(nums: number[]): boolean {
	let minA = Infinity;
	let minB = Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= minA) {
			minA = nums[i];
		} else if (nums[i] <= minB) {
			minB = nums[i];
		} else {
			return true;
		}
	}
	return false;
};

export default increasingTriplet;