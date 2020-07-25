import React from 'react';
import classNames from 'classnames';

export default ({
    wins
}) => {
    return <div className="wins flex flex-between">
        {
            [...Array(6)].map((_, index) => {
                return <span key={index} className={classNames("wt-10 ht-10 bg-white rounded", {
                    'op-5': (index + 1) > wins
                })}></span>
            })
        }
    </div>
}