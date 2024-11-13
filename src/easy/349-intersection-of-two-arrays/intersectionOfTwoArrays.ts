function intersection(nums1: number[], nums2: number[]): number[] {
    const nums: number[] = [];
    const map: { [key: number]: number } = {};

    for (let i = 0; i < nums1.length; i++) {
		map[nums1[i]] = 1;
    }
	
    for (let i = 0; i < nums2.length; i++) {
		const res = map[nums2[i]];
		if (res) {
			nums.push(nums2[i]);
			map[nums2[i]] = 0;
		}
    }

    return nums;
};

export default intersection;