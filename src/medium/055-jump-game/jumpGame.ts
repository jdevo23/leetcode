function canJump(nums: number[]): boolean {
	if (nums.length == 1) return true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let j = i - 1;

            while (j >= 0) {
                if (nums[j] > (i - j) || (i == nums.length - 1 && nums[j] == (i - j))) {
                    break;
				}
                j--;
            }

            if (j < 0) {
				return false;
            }
        }
    }

    return true;
};

export default canJump;