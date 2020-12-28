import { takeEvery, put } from 'redux-saga/effects';
import * as actions from '../actions';

function* getLocationWorker(action) {
  yield put(actions.GET_LOCATION.success(action.payload));
}

function* getLocationWatcher() {
  yield takeEvery(actions.GET_LOCATION.init().type, getLocationWorker);
}

export default [getLocationWatcher];
