import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  latitude: null,
  longitude: null,
};

const location = handleActions(
  {
    [actions.GET_LOCATION.init().type]: (state) => ({
      ...state,
    }),
    [actions.GET_LOCATION.success().type]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [actions.GET_LOCATION.error().type]: (state) => ({
      ...state,
    }),
  },
  initialState,
);

export default location;
