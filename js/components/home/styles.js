import { Platform } from 'react-native';
import commonColors from '../../common/commonColors';

const React = require('react-native');
const { StyleSheet } = React;
const platform = Platform.OS;
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
    paddingHorizontal: 5,
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
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: commonColors.BUTTON_COLOR,
    width: 200,
    alignSelf: 'center',
  },
});
