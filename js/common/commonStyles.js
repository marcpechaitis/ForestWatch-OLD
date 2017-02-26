import { Platform } from 'react-native';
import commonColors from './commonColors';

const React = require('react-native');
const { StyleSheet } = React;
const platform = Platform.OS;

//const styles = {
module.exports = StyleSheet.create({
  // layout styles
  content: {
    backgroundColor: commonColors.BACKGROUND_COLOR_CONTENT,
    paddingTop: 4,
  },
  card: {
    backgroundColor: commonColors.BACKGROUND_COLOR_CARD,
    margin: 8,
    padding: 8,
    borderRadius: platform === 'ios' ? 5 : 2,
  },
  grid: {
    marginTop: 16,
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  mt16: {
    marginTop: 16,
  },
  // text styles
  text: {
    fontSize: 16,
    alignItems: 'center',
  },
  // element styles
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: commonColors.BUTTON_COLOR,
    marginTop: 16,
    marginBottom: 16,
    width: 200,
    alignSelf: 'center',
  },

  emergency: {
    backgroundColor: commonColors.BUTTON_COLOR_EMERGENCY,
  },
  dispatch: {
    backgroundColor: commonColors.BUTTON_COLOR,
  },
});
