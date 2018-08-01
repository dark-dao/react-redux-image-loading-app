import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NotFoundPage  = () => (
  <div className="_not-found-page">
    <div className="_not-found-page-text">
      <span>Страница не найдена</span>
      <Link to="/">На главную</Link>
    </div>
  </div>
);

export default NotFoundPage;
