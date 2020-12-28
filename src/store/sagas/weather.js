import { takeEvery, put, call, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import weatherApi from '../../api/weather';

function* getWeatherWithLocationWorker(action) {
  const { ...coords } = action.payload;

  const response = yield call(weatherApi.getWeatherWithLocation, coords);
  if (response.cod) {
    yield put(actions.GET_WEATHER.error(response));
    // return yield Alert.alert(response.message);
  }
  yield delay(200);
  yield put(actions.GET_WEATHER.success(response));
}

function* getWeatherCityNameWorker(action) {
  const { cityName } = action.payload;
  const response = yield call(weatherApi.getWeatherCityName, cityName);
  if (response.cod) {
    yield put(actions.GET_WEATHER_CITY.error(response));
    // return yield Alert.alert(response.message);
  }
  yield delay(200);
  yield put(actions.GET_WEATHER_CITY.success(response));
}

function* getWeatherWatcher() {
  yield takeEvery(
    actions.GET_WEATHER.init().type,
    getWeatherWithLocationWorker,
  );
}

function* getWeatherCityNameWatcher() {
  yield takeEvery(
    actions.GET_WEATHER_CITY.init().type,
    getWeatherCityNameWorker,
  );
}

export default [getWeatherWatcher, getWeatherCityNameWatcher];
