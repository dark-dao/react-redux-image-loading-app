import React from 'react';

import './styles.css';

const PageContainerHeader = (props) => (
    <div className="_page-container-header">
        <h3 className="text">{props.children}</h3>
    </div>
);


export default PageContainerHeader;
