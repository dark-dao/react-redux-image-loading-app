import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = ({url, title, onLoad, isLoading, maxWidth}) => {
    const style = {
        width: maxWidth
    };
    if(!isLoading) {
      return (
          <img onLoad={() => { onLoad() }} style={style} className="_image" src={url ? url : ''} alt={title}/>
      );
    } else {
      return (
        <div className="_image-is-loading">
          <span>Image is loading . . .</span>
          <img onLoad={() => { onLoad() }} style={style} className="_image" src={url ? url : ''} alt={title}/>
        </div>
      );
    }
};

Image.defaultProps = {
    maxWidth: '500px',
    isLoading: false
};
Image.propTypes = {
  url: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Image;
