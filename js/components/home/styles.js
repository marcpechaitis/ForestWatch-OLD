import { Platform } from 'react-native';
import commonColors from '../../common/commonColors';

const React = require('react-native');
const { StyleSheet } = React;
const platform = Platform.OS;
module.exports = StyleSheet.create({
  grid: {
    marginTop: 8,
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: commonColors.BUTTON_COLOR,
    width: 200,
    alignSelf: 'center',
  },
});
