import React from 'react';

const SecondaryButton = (props) => {
    return (
    <button id={props.id} className="secondary-button">{props.text}</button>
    );
}

export default SecondaryButton;