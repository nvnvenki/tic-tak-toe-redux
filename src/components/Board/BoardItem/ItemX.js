import React from 'react';

export default({
    type
}) => {
    return  <img src={type == "yellow" ? "/images/close-y.png" : "/images/close-w.png"} alt="X"/>
}