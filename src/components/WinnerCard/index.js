import React from 'react';
import PlayerCard from "../PlayerCard";

import "./WinnerCard.scss"

export default ({
    finalWinner
}) => {
    return <div className="winner-card-container wt-480 ht-480 border-dashed mh-auto padding-x-15 margin-top-40 border-2 border-radius-46">
        <div className="winner-card br-46 bg-2 h-100 border-radius-46 shadow">
            <h2 className="fs-31 lh-37 ls-122 ls-8 font-white margin-top-0 margin-bottom-30 text-center uppercase">Winner</h2>
            <PlayerCard player={finalWinner} final={true} title={finalWinner.move == 'x' ? 'Player 1' : 'Player 2'} />
        </div>
    </div>
}