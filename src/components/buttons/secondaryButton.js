import React from 'react';

const SecondaryButton = (props) => {
    return (
        <button id={props.id} className={`secondary-button ${(props.lightMode) ? "secondary-button--light" : ''}`} onClick={props.action}>{props.text}</button>
    );
}

export default SecondaryButton;