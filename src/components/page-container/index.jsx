import React from 'react';

import './styles.css';

const PageContainer = (props) => (
    <div className="_page-container">
        {props.children}
    </div>
);

export default PageContainer;
