import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import * as colors from '../../constants/colors';
import styles from './styles';

const WeatherComponent = ({ day, weather, hour }) => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.BACKGROUND_BASE_COLOR}
      />
      <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.temp}>{weather.report.temp}°</Text>
        <Text style={styles.city}>{weather.name}</Text>
        <View style={styles.containerTemps}>
          <Text style={styles.tempVariant}>Min: {weather.report.tempMin}°</Text>
          <Text style={styles.tempVariant}>Max: {weather.report.tempMax}°</Text>
        </View>
        <Text style={styles.hour}>{hour}</Text>
      </View>
      <Image
        source={require('../../../assets/images/bottom-drawer.png')}
        style={styles.bottomImage}
      />
    </SafeAreaView>
  );
};

export default WeatherComponent;
