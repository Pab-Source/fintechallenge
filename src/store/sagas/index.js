import { all, fork } from 'redux-saga/effects';
import locationSagas from './location';
import weatherSagas from './weather';
import fiveDaysSagas from './fiveDays';

const startSagas = (sagas) => {
  return function* rootSagas() {
    yield all(sagas.map((saga) => fork(saga)));
  };
};

export default startSagas([
  ...locationSagas,
  ...weatherSagas,
  ...fiveDaysSagas,
]);
