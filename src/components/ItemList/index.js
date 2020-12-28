import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ItemList = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <View style={styles.left}>
        <Text>{item.name}</Text>
        <Text>{item.report.date}</Text>
      </View>
      <View style={{ width: '40%' }}>
        <Text style={{ textAlign: 'right' }}>{item.report.temp}°</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;
