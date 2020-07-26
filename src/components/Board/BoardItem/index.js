import React from 'react';
import ItemO from './ItemO';
import ItemEmpty from './ItemEmpty';
import ItemX from './ItemX';
import classNames from 'classnames';

export default({
    item,
    onClick,
    winner, 
    winningItem
}) => {
    return <div className={classNames("board-item flex flex-middle padding-x-32 border-dashed cp", {
        "no-action": item == "x" || item == "0" || winner == 'x' || winner == 'o'
    })} onClick={ onClick }>
        {
            item == "x" && <ItemX type={winner == 'x' && winningItem ? "yellow": ""}/>
        }
        {
            item == "o" && <ItemO type={winner == 'o' && winningItem ? "yellow": ""} />
        }
        {
            item == null && <ItemEmpty />
        }
        
    </div>
}