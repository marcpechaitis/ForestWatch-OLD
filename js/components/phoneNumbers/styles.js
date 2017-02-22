import { Platform } from 'react-native';
import commonColors from '../../common/commonColors';

const React = require('react-native');
const { StyleSheet } = React;
const platform = Platform.OS;

//const styles = {
module.exports = StyleSheet.create({
  container: {
    margin: 20,
  },
  content: {
    backgroundColor: commonColors.BACKGROUND_COLOR_CONTENT,
  },
  card: {
    backgroundColor: commonColors.BACKGROUND_COLOR_CARD,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: platform === 'ios' ? 5 : 2,
  },
  grid: {
    marginTop: 18,
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    alignSelf: 'center',
  },
  emergency: {
    backgroundColor: commonColors.BUTTON_COLOR_EMERGENCY,
  },
  dispatch: {
    backgroundColor: commonColors.BUTTON_COLOR,
  },
  mt20: {
    marginTop: 20,
  },
});
