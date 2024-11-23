// function merge(intervals: number[][]): number[][] {
// 	intervals.sort((a, b) => a[0] - b[0]);

//     const result: number[][] = [];

// 	let i = 0;
// 	while (i < intervals.length) {
// 		const array = [intervals[i][0]];
// 		let currB = intervals[i][1];
// 		let j = i + 1;
// 		while (j <= intervals.length) {
// 			currB = Math.max(intervals[j - 1][1], currB);
// 			if (j == intervals.length || currB < intervals[j][0]) {
// 				array.push(currB);
// 				i = j;
// 				break;
// 			}
// 			j++;
// 		}

// 		result.push(array);
// 	}

//     return result;
// };
function merge(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0]);

	const result: number[][] = [intervals.length > 0 ? intervals.shift()! : []];

	while (intervals.length) {
		const prev = result[result.length - 1];
		const curr = intervals.shift()!;

		if (curr[0] > prev[1]) {
			result.push(curr);
		} else {
			result[result.length - 1][1] = Math.max(result[result.length - 1][1], curr[1]);
		}
	}

    return result;
};

export default merge;