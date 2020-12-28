import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {};

const location = handleActions(
  {
    [actions.GET_WEATHER.init().type]: (state) => ({
      ...state,
    }),
    [actions.GET_WEATHER.success().type]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [actions.GET_WEATHER.error().type]: (state) => ({
      ...state,
    }),
    [actions.GET_WEATHER_CITY.init().type]: (state) => ({
      ...state,
    }),
    [actions.GET_WEATHER_CITY.success().type]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [actions.GET_WEATHER_CITY.error().type]: (state) => ({
      ...state,
    }),
  },
  initialState,
);

export default location;
