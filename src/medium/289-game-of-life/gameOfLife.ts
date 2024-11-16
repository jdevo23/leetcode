/**
 Do not return anything, modify board in-place instead.
 */

/* 
	1. Any live cell with fewer than two live neighbours dies as if caused by under-population.
	2. Any live cell with two or three live neighbours lives on to the next generation.
	3. Any live cell with more than three live neighbours dies, as if by over-population.
	4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

/* 
	0 = was dead, remains dead
	2 = was dead, now alive
	1 = was alive, remains alive
	3 = was alive, now dead
*/

function gameOfLife(board: number[][]): void {
    for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			const neighbours = [];
			
			// row above
			if (r - 1 >= 0) {
				if (c - 1 >= 0) {
					neighbours.push(board[r - 1][c - 1]);
				}
				neighbours.push(board[r - 1][c]);
				if (c + 1 < board[r].length) {
					neighbours.push(board[r - 1][c + 1]);
				}
			}

			// cell left
			if (c - 1 >= 0) {
				neighbours.push(board[r][c - 1]);
			}
			
			// cell right
			if (c + 1 < board[r].length) {
				neighbours.push(board[r][c + 1]);
			}

			// row below
			if (r + 1 < board.length) {
				if (c - 1 >= 0) {
					neighbours.push(board[r + 1][c - 1]);
				}
				neighbours.push(board[r + 1][c]);
				if (c + 1 < board[r].length) {
					neighbours.push(board[r + 1][c + 1]);
				}
			}

			const currCell = board[r][c];
			// count 1s and 3s
			let numLive = 0;
			for (let i = 0; i < neighbours.length; i++) {
				if (neighbours[i] == 1 || neighbours[i] == 3) {
					numLive++;
				}
			}

			if (currCell == 0 && numLive == 3) {
				board[r][c] = 2;
			} else if (currCell == 1 && (numLive < 2 || numLive > 3)) {
				board[r][c] = 3;
			}
		}
	}

	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			if (board[r][c] == 2) {
				board[r][c] = 1;
			} else if (board[r][c] == 3) {
				board[r][c] = 0;
			}
		}
	}
};

export default gameOfLife;