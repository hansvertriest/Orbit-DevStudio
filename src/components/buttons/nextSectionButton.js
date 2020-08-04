import React from 'react';

import arrowDown from '../../images/icons/arrow-down.svg'

const NextSectionButton = (props) => {

    return (
        <div className="next-section-button" onClick={props.callback}>
            <img src={arrowDown}/>
            <p>{props.text}</p>
        </div>
    );
}

export default NextSectionButton;