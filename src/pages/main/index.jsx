import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    LoaderBar,
    ActionButton
} from '../../atoms'
import {
    PageContainer,
    PageContainerHeader,
    ImageContainer
} from '../../components';
import {
    getImageAction
} from '../../actions';

import { getImageInfo, getImageLoadingStatus } from './selectors';

class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      imageInfo: props.imageInfo,
      imageIsLoading: props.imageIsLoading
    }
  }
  componentDidMount() {
    const { imageInfo } = this.props;
    if(!imageInfo.imageId) {
      this.props.getImageAction();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      imageInfo: nextProps.imageInfo,
      imageIsLoading: nextProps.imageIsLoading
    });
  }
  handleClick() {
    const { imageIsLoading } = this.state;
    if(!imageIsLoading) {
      this.props.getImageAction();
    }
  }
  render() {
    const { imageInfo, imageIsLoading } = this.state;
    return (
      <PageContainer>
        <PageContainerHeader>
          Главная
        </PageContainerHeader>
        {!imageIsLoading ? (
          <ImageContainer imageUrl={imageInfo.imageOriginal} title={imageInfo.title}/>
          /*<ImageContainer lowQualityUrl={imageInfo.imagePreview} imageUrl={imageInfo.imageOriginal} title={imageInfo.title}/> for show low quality before loading*/
        ) : (<LoaderBar />)}
        <ActionButton handleClick={() => { this.handleClick() }}>Загрузка</ActionButton>
      </PageContainer>
    );
  }
};

const mapStateToProps = state => ({
 imageInfo: getImageInfo(state),
 imageIsLoading: getImageLoadingStatus(state)
});
const mapDispatchToProps = {
  getImageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
