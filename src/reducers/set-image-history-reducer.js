import Immutable from 'immutable';

import { CONSTANTS } from '../constants';

const initialState = Immutable.fromJS({
  error: false,
  imagesList: Immutable.List()
});

export const imagesHistoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONSTANTS.SET_IMAGE_HISTORY_ADD:
      let arr = state.get('imagesList');
      return state
        .set('imagesList', arr.unshift(action.payload.imageInfo));
    case CONSTANTS.SET_IMAGE_HISTORY_DELETE:
      const index = state.get('imagesList').findIndex(i => i.id === action.payload.imageId);
      return state
        .set('imagesList', state.get('imagesList').delete(index));
    case CONSTANTS.SET_IMAGE_HISTORY_CLEAR:
      return state.set('imagesList', Immutable.List());
    default:
      return state;
  }
};
