import { StyleSheet } from 'react-native';
import * as colors from '../../constants/colors';

export default StyleSheet.create({
  indicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  day: {
    fontSize: 30,
    color: 'white',
    lineHeight: 70,
    fontFamily: 'Raleway-Italic',
  },
  temp: {
    fontSize: 190,
    lineHeight: 190,
    color: 'white',
    fontFamily: 'Raleway-Medium',
  },
  city: {
    fontSize: 30,
    color: 'white',
    lineHeight: 100,
    fontFamily: 'Raleway-Italic',
  },
  containerTemps: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    lineHeight: 10,
  },
  tempVariant: {
    fontSize: 30,
    color: 'white',
    lineHeight: 120,
    fontFamily: 'Raleway-Italic',
  },
  hour: {
    fontSize: 40,
    color: 'white',
    lineHeight: 40,
    fontFamily: 'Raleway-Italic',
  },
  bottomImage: {
    position: 'relative',
    bottom: -60,
  },
  background: {
    backgroundColor: colors.BACKGROUND_BASE_COLOR,
    flex: 1,
  },
});
