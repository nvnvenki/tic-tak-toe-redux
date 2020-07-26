import { 
    START_GAME, 
    DRAW_X,
    DRAW_O,
    CHECK_VICTORY,
    RESTART_GAME
} from '../helpers/actionTypes';

export const startGame = (player1, player2) => dispatch => dispatch({ type: START_GAME, payload: {player1: player1, player2: player2 }});

export const drawX = (index) => (dispatch, getState) => {
    dispatch({type: DRAW_X, payload: { index: index }});
    dispatch({type: CHECK_VICTORY});

    // restart after 1 sec if its won
    if(getState().game.won != "") {
        setTimeout(() => dispatch({type: RESTART_GAME}), 1000);
    }
} 


export const drawO = (index) => (dispatch, getState) => {
    dispatch({type: DRAW_O, payload: { index: index }});
    dispatch({type: CHECK_VICTORY});
    
    // restart after 1 sec if its won
    if(getState().game.won != "") {
        setTimeout(() => dispatch({type: RESTART_GAME}), 1000);
    }
}
