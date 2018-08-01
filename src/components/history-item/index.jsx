import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, ActionButtonSmall } from '../../atoms';
import './styles.css';

class HistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIsLoading: true
    };
  }
  onLoadImage() {
    this.setState({imageIsLoading: false});
  }
  render() {
    const { imageInfo } = this.props;
    const { imageIsLoading } = this.state;
    if(imageInfo) {
      return (
        <div className="_history-item">
          <div className="image-container">
            <Image onLoad={() => { this.onLoadImage() }} isLoading={imageIsLoading} url={imageInfo.imagePreview} title={imageInfo.title} maxWidth="200px"/>
            <div className="button-container">
              {!imageIsLoading ? (
                <ActionButtonSmall trash handleClick={() => { this.props.handleDelete(imageInfo.imageId)}} />
              ) : null}
            </div>
          </div>
          <div className="_history-item-title">
            <div className="_history-item-name">
              <span>{ imageInfo.title }</span>
            </div>
            <div className="_histpry-item-date">
              <span>{ imageInfo.importDate }</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};

HistoryItem.propTypes = {
  imageInfo: PropTypes.object.isRequired
};

export default HistoryItem;
