/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
	const rows = [];
	const cols = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 0) {
				rows.push(i);
				cols.push(j);
			}
		}
	}

	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < matrix[rows[i]].length; j++) {
			matrix[rows[i]][j] = 0;
		}
		for (let j = 0; j < matrix.length; j++) {
			matrix[j][cols[i]] = 0;
		}
	}
}

 export default setZeroes;