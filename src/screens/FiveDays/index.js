import FiveDays from './FiveDays';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const mapStateToProps = (state) => ({
  location: state.location,
  fiveDays: state.fiveDays.fiveDays,
});

const mapDispathToProps = (dispatch) => ({
  getWeatherFiveDays: (location) =>
    dispatch(actions.GET_FIVEDAYS_WEATHER.init({ ...location })),
});

export default connect(mapStateToProps, mapDispathToProps)(FiveDays);
