import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import './style.css';

class HeaderLink extends Component {
  handleCheckRoute(baseRoute, currentRoute) {
    let isActive = true;
    if(baseRoute.split('/')[1] !== currentRoute.split('/')[1]) {
      isActive = false;
    }
    return isActive;
  }
  render() {
    const { name, route, location } = this.props;
    const isActive = this.handleCheckRoute(route, location.pathname);

    const className = classnames({
      "_header-link": true,
      "active": isActive
    });
    return (
      <div className={className}>
        <Link to={route}>{name}</Link>
      </div>
    );
  }
};
HeaderLink.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};
HeaderLink.defaultProps = {
  name: '',
  isActive: false
};
export default withRouter(HeaderLink);
