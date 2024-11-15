function spiralOrder(matrix: number[][]): number[] {
	const result: number[] = [];

	const boundaries = [
		[0,0], 											// top left
		[matrix[0].length - 1, 0], 						// top right
		[matrix[0].length - 1, matrix.length - 1],		// bottom right
		[0, matrix.length - 1],							// bottom left
	];

	while (true) {
		// move right
		let currY = boundaries[0][1];
		let currX = boundaries[0][0];
		let endX = boundaries[1][0];
		if (currX > endX) break;
		let i;
		for (i = currX; i <= endX; i++) {
			result.push(matrix[currY][i]);
		}

		// move down
		currX = endX;
		currY++;
		let endY = boundaries[2][1];
		if (currY > endY) break;
		for (i = currY; i <= endY; i++) {
			result.push(matrix[i][currX]);
		}

		// move left
		currY = endY;
		currX--;
		endX = boundaries[3][0];
		if (endX > currX) break;
		for (i = currX; i >= endX; i--) {
			result.push(matrix[currY][i]);
		}

		// move up
		currX = endX;
		currY--;
		endY = boundaries[0][1];
		if (endY > currY) break;
		for (i = currY; i > endY; i--) {
			result.push(matrix[i][currX]);
		}

		// reduce the boundaries
		// top left
		boundaries[0][0] = boundaries[0][0] + 1;
		boundaries[0][1] = boundaries[0][1] + 1;
		// top right
		boundaries[1][0] = boundaries[1][0] - 1;
		boundaries[1][1] = boundaries[1][1] + 1;
		// bottom right
		boundaries[2][0] = boundaries[2][0] - 1;
		boundaries[2][1] = boundaries[2][1] - 1;
		// bottom left
		boundaries[3][0] = boundaries[3][0] + 1;
		boundaries[3][1] = boundaries[3][1] - 1;

		if (boundaries[0][1] > boundaries[3][1]) break;
	}

	return result;
};

export default spiralOrder;