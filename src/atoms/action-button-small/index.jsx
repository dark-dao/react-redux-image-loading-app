import React from 'react';
import classnames from 'classnames';

import './styles.css';

const ActionButtonSmall = ({ handleClick, trash }) => {
    const classes = classnames({
        "_action-button-small": true,
        "trash": trash
    })
    return (<button className={classes} onClick={() => handleClick()} />);
};

export default ActionButtonSmall;
