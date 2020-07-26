import React, { useContext } from 'react';
import WelcomeCard from '../WelcomeCard';
import Board from '../Board';
import PlayerCard from '../PlayerCard'
import WinnerCard from '../WinnerCard';
import { GlobalContext } from '../../App';


export default() => {
    const { reduxState } = useContext(GlobalContext);
    const {
        step,
        player1,
        player2,
        turn,
        won,
        finalWinner
    } = reduxState.game;

    return <div className="container">
        {
            step == "welcome" && 
            <WelcomeCard  />
        }
        {
            step == "play" &&
            <div className="play-board flex flex-middle flex-even">
                <PlayerCard turn={turn} won={won} title={"Player 1"} player={player1} />
                <Board />
                <PlayerCard turn={turn} won={won} title={"Player 2"}  player={player2} />
            </div>
        }

        {
            step == "gameOver" && 
            <WinnerCard finalWinner={finalWinner} />
        }
    </div>
}