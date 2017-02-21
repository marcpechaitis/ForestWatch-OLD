import commonColors from '../../common/commonColors';

const React = require('react-native');

const { StyleSheet } = React;

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
  mt: {
    marginTop: 18,
  },
});
