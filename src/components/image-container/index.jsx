import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Image } from '../../atoms';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priorityUrl: props.lowQualityUrl || props.imageUrl,
      imageIsLoading: true
    };
  }
  onLoadImage() {
    const { imageUrl, lowQualityUrl } = this.props;
    if(lowQualityUrl) {
      this.setState({
        priorityUrl: imageUrl
      });
    }
    this.setState({
      imageIsLoading: false
    });
  }
  render() {
    const { imageUrl, title } = this.props;
    const { priorityUrl, imageIsLoading } = this.state;
    return (
      <div className="_image-container">
        { imageUrl ? (
        <div className="_image-card">
          <Image isLoading={ imageIsLoading } onLoad={() => { this.onLoadImage() }} url={ priorityUrl } title={ title }/>
          { title.length ? (
            <div className="_image-title">
              { title }
            </div>
          ) : null}
        </div>
        ) : null}
      </div>
    );
  }
};

ImageContainer.propTypes = {
  imageUrl: PropTypes.string,
  lowQualityUrl: PropTypes.string,
  title: PropTypes.string
};

export default ImageContainer;
