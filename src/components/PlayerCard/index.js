import React from 'react';
import Wins from '../Wins';
import ItemO from '../Board/BoardItem/ItemO';
import classNames from 'classnames';

export default({
    player,
    title,
    turn,
    won,
    final
}) => {

    return <div className="player-card ">
        
        {
            won == "draw" && 
            <h2 className="margin-top-0 result uppercase font-medium font-roboto font-white margin-bottom-18 fs-31 lh-40 text-center result">DRAW</h2> 
        }
        {
            won == "" &&  <h2 className="margin-top-0 result font-medium font-roboto font-yellow margin-bottom-25 fs-21 lh-28 text-center result"> { turn == title ? "Your Turn" : ""} </h2>
        }

        {
            (won == "x" || won == "o") &&  
            <h2 className="margin-top-0 result font-medium font-roboto font-yellow margin-bottom-25 fs-21 lh-28 text-center result"> 
                {
                    player.move == won && <span> You Won!</span>
                }
            </h2>
        }
       
        <div className={classNames("scorer border border-3 border-radius-15 margin-bottom-15 ", {
            "border-yellow" : won == "draw" || won == player.move || final
        })}>
            <div className="flex flex-column flex-center padding-top-15 padding-bottom-20 padding-left-26 padding-right-26 flex-middle names">
                <span className="font-roboto font-medium fs-10 lh-13 font-yellow uppercase player"> { title }</span>
                <span className="font-roboto font-medium fs-18 lh-24 font-white margin-top-12 margin-bottom-8 player-name"> { player.name} </span>
                {
                    player.move == "x" && <img src="/images/close-w.png" alt="" className="wt-43 ht-43" />
                }

                {
                    player.move == "o" && <ItemO type={"white"} size={"sm"} />
                }
                
            </div>
        </div>
        <Wins wins={player.wins} />
    </div>
}