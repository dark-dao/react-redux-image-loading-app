import React from 'react';

import './styles.css';

const ActionButton = (props) => (
    <button className="_action-button" onClick={() => props.handleClick()}>{props.children}</button>
);

export default ActionButton;
