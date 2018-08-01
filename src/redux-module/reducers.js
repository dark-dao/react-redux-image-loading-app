import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { getImageReducer, imagesHistoryReducer } from '../reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  getImageReducer,
  imagesHistoryReducer
});

export default rootReducer;
