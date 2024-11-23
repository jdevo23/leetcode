function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];

	if (!intervals.length) {
		result.push(newInterval);
		return result;
	}

	result.push(intervals.shift()!);

	const a = result[0][0];
	const b = result[0][1];

	if (newInterval[1] < a) {
		result.splice(0, 0, newInterval);
		newInterval = [];
	}

	if (
		newInterval.length &&
		(newInterval[0] >= a && newInterval[0] <= b) ||
		(newInterval[1] >= a && newInterval[1] <= b) ||
		(newInterval[0] <= a && newInterval[1] >= b)
	) {
		result[0][0] = Math.min(newInterval.splice(0,1)[0], result[0][0]);
		result[0][1] = Math.max(newInterval.splice(0,1)[0], result[0][1]);
	}
	while (intervals.length) {
		const prev = result[result.length - 1];
		const curr = intervals.shift()!;

		if (prev[1] >= curr[1]) {
			continue;
		}

		if (
			newInterval.length &&
			(
				(curr[0] <= newInterval[0] && curr[1] >= newInterval[0]) ||
				(newInterval[1] >= curr[0] && newInterval[1] <= curr[1]) ||
				(curr[0] >= newInterval[0] && curr[1] <= newInterval[1])
			)
		) {
			curr[0] = Math.min(newInterval.splice(0,1)[0], curr[0]);
			curr[1] = Math.max(newInterval.splice(0,1)[0], curr[1]);
			result.push(curr);
			continue;
		}

		if (newInterval.length && curr[0] > newInterval[1]) {
			result.push(newInterval);
			newInterval = [];
		}

		if (curr[0] <= prev[1]) {
			result[result.length - 1][1] = Math.max(curr[1], prev[1]);
			continue;
		}

		if (prev[1] < curr[0]) {
			result.push(curr);
		}
	}

	if (newInterval.length) {
		result.push(newInterval);
	}

    return result;
};

export default insert;