import { StyleSheet } from 'react-native';
import * as colors from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  containerBtn: { width: '90%', marginTop: 20 },
  btn: {
    width: '100%',
    color: 'white',
    height: 50,
    borderRadius: 5,
    borderWidth: 4,
    backgroundColor: colors.BACKGROUND_BASE_COLOR,
    borderColor: colors.BACKGROUND_BASE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: { color: 'white' },
});
