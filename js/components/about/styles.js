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
    padding: 7,
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
});
