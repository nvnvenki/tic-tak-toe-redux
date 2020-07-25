import React from 'react';
import PlayerCard from "../PlayerCard";

import "./WinnerCard.scss"

export default ({

}) => {
    return <div className="winner-card-container wt-480 ht-480 border-dashed mh-auto padding-x-15 margin-top-40 border-2 border-radius-46">
        <div className="winner-card br-46 bg-2 h-100 border-radius-46 shadow">
            <PlayerCard />
        </div>
    </div>
}