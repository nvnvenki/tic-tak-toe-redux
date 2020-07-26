export const checkVictory = (board, symbol) => {
	
	// [0, 1, 2, 
	// 3, 4, 5, 
	// 6, 7, 8]

	// Horizontal
	if (board[0] === symbol && board[1] === symbol && board[2] === symbol) {
		return [0, 1, 2];
	}

	if (board[3] === symbol && board[4] === symbol && board[5] === symbol) {
		return [3, 4, 5];
	}

	if (board[6] === symbol && board[7] === symbol && board[8] === symbol) {
		return [6, 7, 8];
	}


	// vertical
	if (board[0] === symbol && board[3] === symbol && board[6] === symbol) {
		return [6, 7, 8];
	}

	if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {
		return [1, 4, 7];
	}

	if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {
		return [2, 5, 8];
	}


	// diagonal
	if (board[0] === symbol && board[4] === symbol && board[8] === symbol) {
		return [0, 4, 8];
	}

	if (board[6] === symbol && board[4] === symbol && board[2] === symbol) {
		return [6, 4, 2];
	}


	return;
}