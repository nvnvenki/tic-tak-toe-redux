import React from 'react';
import Wins from '../Wins';

export default({

}) => {
    return <div className="player-card ">
        <h2 className="mv-0 result uppercase font-medium font-roboto font-white margin-bottom-18 fs-31 lh-40 text-center result">DRAW</h2>
        <div className="scorer border border-3 border-yellow border-radius-15 margin-bottom-15 ">
            <div className="flex flex-column flex-center padding-top-15 padding-bottom-20 padding-left-26 padding-right-26 flex-middle names">
                <span className="font-roboto font-medium fs-10 lh-13 font-yellow uppercase player">Player1</span>
                <span className="font-roboto font-medium fs-18 lh-24 font-white margin-top-12 margin-bottom-8 player-name">Player1</span>
                <img src="/images/close-w.png" alt="" className="wt-43 ht-43" />
            </div>
        </div>
        <Wins wins={4} />
    </div>
}