import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  fiveDays: {},
};

const fiveDays = handleActions(
  {
    [actions.GET_FIVEDAYS_WEATHER.init().type]: (state) => ({
      ...state,
    }),
    [actions.GET_FIVEDAYS_WEATHER.success().type]: (state, action) => ({
      ...state,
      fiveDays: action.payload,
    }),
    [actions.GET_FIVEDAYS_WEATHER.error().type]: (state) => ({
      ...state,
    }),
    [actions.GET_FIVEDAYS_WEATHER_CITY.init().type]: (state) => ({
      ...state,
    }),
    [actions.GET_FIVEDAYS_WEATHER_CITY.success().type]: (state, action) => ({
      ...state,
      fiveDays: action.payload,
    }),
    [actions.GET_FIVEDAYS_WEATHER_CITY.error().type]: (state) => ({
      ...state,
    }),
  },
  initialState,
);

export default fiveDays;
