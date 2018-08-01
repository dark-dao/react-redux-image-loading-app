import { CONSTANTS } from '../constants';

import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  error: false,
  payload: {}
});

export const getImageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONSTANTS.GET_IMAGE_REQUEST:
      return state
        .set('payload', action.payload);
    case CONSTANTS.GET_IMAGE_SUCCESS:
      return state
        .set('payload', action.payload);
    case CONSTANTS.GET_IMAGE_FAIL:
      return state
        .set('payload', action.payload);
    default:
      return state;
  }
};
