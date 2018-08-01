import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  PageContainer,
  PageContainerHeader,
  HistoryItem
} from '../../components';
import {
  imageHistoryDeleteAction
} from '../../actions';

import { getImagesList } from './selectors';

class HistoryPage extends Component {
  handleDelete(imageId) {
    this.props.imageHistoryDeleteAction(imageId);
  }
  render() {
    const { imagesList } = this.props;
    return (
      <PageContainer>
        <PageContainerHeader>
          История
        </PageContainerHeader>
        {imagesList.map(item => {
          return (
            <HistoryItem key={item.imageId} imageInfo={item} handleDelete={(imageId) => { this.handleDelete(imageId) }}/>
          );
        })}
      </PageContainer>
    );
  }
};

const mapStateToProps = state => ({
  imagesList: getImagesList(state)
});
const mapDispatchToProps = {
  imageHistoryDeleteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
