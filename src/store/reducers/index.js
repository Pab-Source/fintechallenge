import { combineReducers } from 'redux';
import locationReducer from './location';
import weatherReducer from './weather';
import fiveDaysReducer from './fivedays';

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  fiveDays: fiveDaysReducer,
});

export default rootReducer;
