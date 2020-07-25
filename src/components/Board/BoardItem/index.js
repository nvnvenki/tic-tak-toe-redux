import React from 'react';
import ItemO from './ItemO';

export default({
    player,
    value
}) => {
    return <div className="board-item flex flex-middle padding-x-32 border-dashed">
        {/* <img src="/images/close-w.png" alt=""/> */}
        <ItemO type="yellow" size={"sm"}/>
    </div>
}