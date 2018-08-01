import React from 'react';
import _ from 'lodash';

import { HeaderLink } from '../../atoms';

import headerLinksMapper from './header-links-mapper';
import './styles.css';

const Header = () => (
  <div className="_header">
    <div className="links-block">
      {_.map(headerLinksMapper, (item, i) => {
        const { name, link } = item;
        return <HeaderLink key={i} name={name} route={link}/>
      })}
    </div>
  </div>
);

export default Header;
