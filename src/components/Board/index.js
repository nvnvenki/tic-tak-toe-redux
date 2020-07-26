import React, { useState, useContext } from 'react';
import BoardItem from './BoardItem';
import "./Board.scss";
import { GlobalContext } from '../../App';

export default () => {

    const { reduxState, actions } = useContext(GlobalContext);
    const {
        boardItems,
        gameMove,
        won,
        winningRow
    } = reduxState.game;

    const {
        drawX,
        drawO
    } = actions



    return <div className="play-board-container wt-480 ht-480 border-dashed padding-x-15 margin-top-40 border-2 border-radius-46">
        <div className="play-board br-46 flex flex-wrap bg-2 h-100 border-radius-46 shadow">
            {
                [...boardItems].map((item, idx) => {
                    return <BoardItem winningItem={winningRow.indexOf(idx) > -1} winner={won} index={idx} item={item} onClick={() => {
                        gameMove == "x" ? drawX(idx) : drawO(idx) 
                    }}  key={idx} />
                })
            }
        </div>
    </div>
}