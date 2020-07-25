import React from 'react';

export default({
    type,
    size
}) => {
    return <div className={"item-o " + type + " " + size}>
    </div>
}