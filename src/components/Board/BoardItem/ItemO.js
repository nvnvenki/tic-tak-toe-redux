import React from 'react';
import "./Item.scss";

export default({
    type,
    size
}) => {
    return <div className={"item-o " + type + " " + size}>
    </div>
}