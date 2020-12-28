import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './styles';
import * as NavigationService from '../../services/navigation';

const FiveDays = ({ getWeatherFiveDays, location, fiveDays }) => {
  const fiveDaysWeather = useCallback((coords) => getWeatherFiveDays(coords), [
    getWeatherFiveDays,
  ]);

  useEffect(() => {
    fiveDaysWeather(location);
  }, [fiveDaysWeather, location]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fiveDays}
        renderItem={({ item, index }) => (
          <ItemList
            key={index}
            item={item}
            onPress={() => NavigationService.navigate('DetailWeather', item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FiveDays;
