import { Platform } from 'react-native';
import commonColors from '../../common/commonColors';

const React = require('react-native');
const { StyleSheet } = React;
const platform = Platform.OS;

//const styles = {
module.exports = StyleSheet.create({
  container: {
    margin: 16,
  },
  content: {
    backgroundColor: commonColors.BACKGROUND_COLOR_CONTENT,
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
  text: {
    fontSize: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
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
  mt16: {
    marginTop: 16,
  },
});
