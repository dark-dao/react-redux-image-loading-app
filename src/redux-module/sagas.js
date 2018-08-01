import { all } from 'redux-saga/effects';

import { getImageSaga } from '../sagas';

export function* rootSaga() {
  yield all([
    getImageSaga()
  ]);
};
