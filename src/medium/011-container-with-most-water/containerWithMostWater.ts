function maxArea(height: number[]): number {
    let output = 0;
    let l = 0, r = height.length - 1;

    while (l < r) {
        const area = ((r - l) * Math.min(height[r], height[l]));
        output = Math.max(output, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return output;
};

export default maxArea;