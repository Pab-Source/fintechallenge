import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import WeatherToday from './WeatherToday';

const mapStateToProps = (state) => ({
  location: state.location,
  weather: state.weather,
});

const mapDispatchToProps = (dispatch, props) => ({
  getLocationAction: (location) => {
    dispatch(actions.GET_LOCATION.init(location));
    dispatch(actions.GET_WEATHER.init(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);
