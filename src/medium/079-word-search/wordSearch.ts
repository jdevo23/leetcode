function exist(board: string[][], word: string): boolean {
	const rows = board.length;
	const cols = board[0].length;
    const set = new Set<string>();

	function checkSequence(row: number, col: number, i: number): boolean {
		if (i == word.length) {
			return true;
		}

		if (row < 0 || col < 0 || row == rows || col == cols || word[i] != board[row][col] || set.has(`${row},${col}`)) {
			return false;
		}

		const str = `${row},${col}`;
		set.add(str);
        const res: boolean = checkSequence(row + 1, col, i + 1) || checkSequence(row - 1, col, i + 1) || checkSequence(row, col + 1, i + 1) || checkSequence(row, col - 1, i + 1);
		set.delete(str);
		return res;
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (checkSequence(i, j, 0)) {
				return true;
			}
		}
	}

	return false;
};

export default exist;