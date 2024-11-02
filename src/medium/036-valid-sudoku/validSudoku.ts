function isValidSudoku(board: string[][]): boolean {
	function checkRow(x: number, y: number, board: string[][]): boolean {
		for (let i = 0; i < board.length; i++) {
			if (i != y && board[x][i] == board[x][y]) {
				return false;
			}
		}
		return true;
	};

	function checkCol(x: number, y: number, board: string[][]) {
		for (let i = 0; i < board.length; i++) {
			if (i != x && board[i][y] == board[x][y]) {
				return false;
			}
		}
		return true;
	};

	function checkSquare(x: number, y: number, board: string[][]) {
		let i = 0;
		if (x > 2) {
			if (x > 5) {
				i = 6;
			} else {
				i = 3;
			}
		}

		let j = 0;
		if (y > 2) {
			if (y > 5) {
				j = 6;
			} else {
				j = 3;
			}
		}

		for (let m = i; m < i + 3; m++) {
			for (let n = j; n < j + 3; n++) {
				if (board[m][n] == board[x][y] && m != x && n != y) {
					return false;
				}
			}
		}

		return true;
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] == ".") {
				continue;
			}

			if (!checkRow(i, j, board) || !checkCol(i, j, board) || !checkSquare(i, j, board)) {
				return false;
			}
		}
	}

	return true;
};

export default isValidSudoku;