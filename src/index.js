import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';

import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux-module';


const appStore = store();

render(
  <Provider store={appStore}>
      <ConnectedRouter history={history}>
          <Router/>
     </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
