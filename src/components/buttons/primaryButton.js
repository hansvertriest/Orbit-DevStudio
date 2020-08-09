import React from 'react';

const PrimaryButton = (props) => {
    return (
    <button id={props.id} className="primary-button" onClick={props.action}>{props.text}</button>
    );
}

export default PrimaryButton;