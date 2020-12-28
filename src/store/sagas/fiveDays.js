import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import weatherApi from '../../api/weather';

function* getFiveDaysWorker(action) {
  const { ...coords } = action.payload;
  const response = yield call(weatherApi.getWeatherFiveDaysLocation, coords);

  if (response.cod) {
    yield put(actions.GET_FIVEDAYS_WEATHER.error(response));
  }
  yield put(actions.GET_FIVEDAYS_WEATHER.success(response));
}

function* getFiveDaysCityNameWorker(action) {
  const { cityName } = action.payload;
  const response = yield call(weatherApi.getWeatherFiveDaysCityName, cityName);

  if (response.cod) {
    yield put(actions.GET_FIVEDAYS_WEATHER_CITY.error(response));
  }
  yield put(actions.GET_FIVEDAYS_WEATHER_CITY.success(response));
}

function* getFiveDaysWatcher() {
  yield takeEvery(actions.GET_FIVEDAYS_WEATHER.init().type, getFiveDaysWorker);
}

function* getFiveDaysCityNameWatcher() {
  yield takeEvery(
    actions.GET_FIVEDAYS_WEATHER_CITY.init().type,
    getFiveDaysCityNameWorker,
  );
}

export default [getFiveDaysWatcher, getFiveDaysCityNameWatcher];
