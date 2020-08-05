import React from 'react';

import arrowDown from '../../images/icons/arrow-down.svg'
import arrowDownLight from '../../images/icons/arrow-down--light.svg'

const NextSectionButton = (props) => {
    return (
        <div className="next-section-button" onClick={props.callback}>
            <img src={(props.lightMode) ? arrowDownLight : arrowDown}/>
            <p>{props.text}</p>
        </div>
    );
}

export default NextSectionButton;