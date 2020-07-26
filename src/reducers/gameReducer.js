
import { 
    START_GAME, 
    DRAW_X,
    DRAW_O,
    CHECK_VICTORY,
    RESTART_GAME
} from '../helpers/actionTypes';
import { checkVictory } from '../helpers/resultHelper';

const initialState = {
    player1: {},
    player2: {},
    step: "welcome",
    turn: "Player 1",
    won: "",
    boardItems: Array(9).fill(null),
    gameMove: "x",
    finalWinner: null,
    winningRow: []
}
  
export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME: 
            return {
                ...state,
                player1: {
                    name: action.payload.player1,
                    move: "x",
                    wins: 0
                },
                player2: {
                    name: action.payload.player2,
                    move: "o",
                    wins: 0
                },
                step: "play"
            }

        case RESTART_GAME: 
            return {
                ...state,
                boardItems: [...initialState.boardItems],
                turn: "Player 1",
                won: "",
                gameMove: "x",
                finalWinner: null
            }
        
        case DRAW_X: {
                let existingItems = [ ...state.boardItems];
                existingItems[action.payload.index] = "x";

                return {
                    ...state,
                    boardItems: [...existingItems],
                    turn: "Player 2",
                    gameMove: "o"
                }
            }
            
        case DRAW_O: {
            let existingItems = [ ...state.boardItems];
            existingItems[action.payload.index] = "o";
            return {
                ...state,
                boardItems: [...existingItems],
                turn: "Player 1",
                gameMove: "x"
            }
        }

        case CHECK_VICTORY: 
            let existingItems = [ ...state.boardItems];
            const isXWon = checkVictory(existingItems, 'x');
            const isOWon = checkVictory(existingItems, 'o');

            let result = "";
            
            if(!isXWon && !isOWon && state.boardItems.filter(item => item == null).length == 0) {
                result = "draw";
            } else if(isXWon) {
                result = "x";
            } else if(isOWon) {
                result = "o";
            }


            const player1 = state.player1;
            const player2 = state.player2;
            let finalWinner = state.finalWinner;
            if(isXWon) {
                player1.wins = player1.wins + 1;
                if(player1.wins == 6) {
                    finalWinner = { ...player1 }
                }
            }

            if(isOWon) {
                player2.wins = player2.wins + 1;
                if(player2.wins == 6) {
                    finalWinner = { ...player2 }
                }
            }

            return {
                ...state,
                won: result,
                gameMove: result != "" ? "x" : state.gameMove,
                player1: player1,
                player2: player2,
                step: (player1.wins == 6 || player2.wins == 6) ? "gameOver" : state.step,
                finalWinner: finalWinner,
                winningRow: isOWon || isXWon || []
            }
        default: 
            return state;
    }
}