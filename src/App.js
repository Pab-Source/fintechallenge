import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GeolocationService from './services/geolocation';
import WeatherToday from './screens/WeatherToday';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as colors from './constants/colors';
import FiveDays from './screens/FiveDays';
import DrawerOptions from './components/DrawerOptions';
import DetailWeather from './screens/DetailWeather';
import { navigationRef } from './services/navigation';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    GeolocationService.requestPermissionsAndroid();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="WeatherToday"
          drawerContent={DrawerOptions}
          drawerStyle={{ backgroundColor: colors.YELLOW_PRIMARY }}>
          <Drawer.Screen name="WeatherToday" component={WeatherToday} />
          <Drawer.Screen name="FiveDays" component={FiveDays} />
          <Drawer.Screen name="DetailWeather" component={DetailWeather} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
