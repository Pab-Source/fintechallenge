import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Button = ({ onPress, text }) => {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
