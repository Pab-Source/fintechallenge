import { createAction } from '../../utils';

export const GET_LOCATION = createAction('GET_LOCATION');
export const GET_WEATHER = createAction('GET_WEATHER');
export const GET_FIVEDAYS_WEATHER = createAction('GET_FIVEDAYS_WEATHER');
export const SEARCH_CITY = createAction('SEARCH_CITY');
export const GET_WEATHER_CITY = createAction('GET_WEATHER_CITY');
export const GET_FIVEDAYS_WEATHER_CITY = createAction(
  'GET_FIVEDAYS_WEATHER_CITY',
);
