import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import SearchComponent from '../SearchComponent';
import * as NavigationService from '../../services/navigation';

const DrawerOptions = () => {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button
          text="Hoy"
          onPress={() => NavigationService.navigate('WeatherToday')}
        />
        <Button
          text="Five Days"
          onPress={() => NavigationService.navigate('FiveDays')}
        />
        <SearchComponent />
      </View>
    </>
  );
};

export default DrawerOptions;
