import React, { Component } from 'react';

import './App.css';
import {
  LoaderBar
} from './atoms';
import {
  Header
} from './components';

class App extends Component {
  render() {
    return (
      <div className="_main">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
