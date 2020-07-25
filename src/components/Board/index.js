import React, { useState } from 'react';
import BoardItem from './BoardItem';
import "./Board.scss";

export default () => {

    return <div className="play-board-container wt-480 ht-480 border-dashed padding-x-15 margin-top-40 border-2 border-radius-46">
        <div className="play-board br-46 flex flex-wrap bg-2 h-100 border-radius-46 shadow">
            {
                [...Array(9)].map((_, idx) => {
                    return <BoardItem key={idx} />
                })
            }
        </div>
    </div>
}