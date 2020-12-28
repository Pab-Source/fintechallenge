import React from 'react';
import { NativeModules } from 'react-native';
import WeatherComponent from '../../components/WeatherComponent';
import { daysWeek } from '../../utils';

const DetailWeather = ({ route }) => {
  const language = NativeModules.I18nManager.localeIdentifier;
  const time = new Date(route.params.report.date);
  const day = daysWeek(language)[time.getDay() + 1];
  const hour = `${time.getHours()}:${time.getMinutes()}`;

  return <WeatherComponent day={day} hour={hour} weather={route.params} />;
};

export default DetailWeather;
