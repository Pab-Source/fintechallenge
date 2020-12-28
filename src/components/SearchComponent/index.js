import SearchComponent from './SearchComponent';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const mapDispathToProps = (dispatch) => ({
  getLocationWithCityName: (cityName) => {
    dispatch(actions.GET_WEATHER_CITY.init({ cityName }));
    dispatch(actions.GET_FIVEDAYS_WEATHER_CITY.init({ cityName }));
  },
});

export default connect(null, mapDispathToProps)(SearchComponent);
