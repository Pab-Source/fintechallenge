import React, { useState } from 'react';
import { TextInput, Keyboard } from 'react-native';
import styles from './styles';
import Button from '../Button';
import * as colors from '../../constants/colors';
import * as NavigationService from '../../services/navigation';

const SearchComponent = ({ getLocationWithCityName }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    if (search) {
      getLocationWithCityName(search);
      NavigationService.navigate('WeatherToday');
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search your city here."
        placeholderTextColor={colors.BACKGROUND_BASE_COLOR}
        value={search}
        onChangeText={setSearch}
      />
      <Button text="Search" onPress={handleSubmit} />
    </>
  );
};

export default SearchComponent;
