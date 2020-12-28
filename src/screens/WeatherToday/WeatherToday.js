import React, { useEffect, useCallback } from 'react';
import { View, ActivityIndicator, NativeModules } from 'react-native';
import GeolocationService from '../../services/geolocation';
import WeatherComponent from '../../components/WeatherComponent';
import { daysWeek } from '../../utils';
import * as colors from '../../constants/colors';
import styles from './styles';

const WeatherToday = ({ getLocationAction, weather }) => {
  const getLocation = useCallback((position) => getLocationAction(position), [
    getLocationAction,
  ]);

  useEffect(() => {
    GeolocationService.getGeoLocation(getLocation);
  }, [getLocation]);

  if (!weather.name) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color={colors.YELLOW_PRIMARY} size="large" />
      </View>
    );
  }

  const language = NativeModules.I18nManager.localeIdentifier;
  const time = new Date();
  const day = daysWeek(language)[time.getDay()];
  const parseHour =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const parseMinutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const hour = `${parseHour}:${parseMinutes}`;

  return <WeatherComponent weather={weather} hour={hour} day={day} />;
};

export default WeatherToday;
