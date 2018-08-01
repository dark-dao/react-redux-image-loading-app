/* eslint-disable no-constant-condition */
import { take, put, call } from 'redux-saga/effects';

import { ApiClient } from '../utils';
import { CONSTANTS } from '../constants';
import { imageHistoryAddAction, getImageActionSuccess, getImageActionFail } from '../actions';

//import { TEST_DATA, selectAnswer, resetTest, setDisputAnswers } from '../actions/testData';

export function* getImageSaga() {
  while(true) {
    try {
      const callImageRequest = yield take([CONSTANTS.GET_IMAGE_REQUEST]);
      if(callImageRequest) {
          const request = yield call(apiClient => new ApiClient().get('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA'));
          if(request.success) {
              yield put(getImageActionSuccess(request.response.data.data));
              yield put(imageHistoryAddAction(request.response.data.data));
          } else {
              yield put(getImageActionFail(request.error));
          }
      }
    } catch (error) {
      yield put(getImageActionFail(error));
    }
  }
};
