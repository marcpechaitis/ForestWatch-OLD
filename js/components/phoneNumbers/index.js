import React, { Component } from 'react';
import { Alert, Linking } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import {
  Card,
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
} from 'native-base';

import { openDrawer } from '../../actions/drawer';
import commonStyles from '../../common/commonStyles';
import params from '../../common/params';
import styles from './styles';
import theme from '../../themes/base-theme';

const {
  popRoute,
} = actions;

class PhoneNumbers extends Component {
  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  };

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  makePhoneCall(phoneNbrToCall) {
    const phoneURL = `tel:${phoneNbrToCall}`;
    Alert.alert(`Call ${phoneNbrToCall}?`, '', [
      { text: 'Cancel', onPress: () => null },
      {
        text: 'Yes',
        onPress: () => Linking.canOpenURL(phoneURL)
          .then(supported => {
            if (!supported) {
              console.log(`Can't call: ${phoneURL}`);
            } else {
              return Linking.openURL(phoneURL);
            }
          })
          .catch(error => console.log('An unexpected error happened', error)),
      },
    ]);
  }

  render() {
    return (
      <Container theme={theme}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Important Phone Numbers</Title>

        </Header>

        <Content style={commonStyles.content}>
          <Card style={commonStyles.card}>
            <Text style={styles.text}>
              {params.PHONE_TEXT_EMERGENCY}
            </Text>
            <Button
              style={[commonStyles.button, commonStyles.emergency]}
              onPress={() => this.makePhoneCall(params.PHONE_NUMBER_EMERGENCY)}
            >
              <Text style={commonStyles.buttonText} allowFontScaling={false}>
                Call {params.PHONE_NUMBER_EMERGENCY}
              </Text>
            </Button>
            <Text style={styles.text}>
              {params.PHONE_TEXT_NON_EMERGENCY}
            </Text>
            <Text style={[commonStyles.mt16, styles.text]}>
              {params.PHONE_TEXT_DISPATCH_BOULDER}
            </Text>
            <Button
              style={[commonStyles.button, commonStyles.dispatch]}
              onPress={() =>
                this.makePhoneCall(params.PHONE_NUMBER_DISPATCH_BOULDER)}
            >
              <Text style={commonStyles.buttonText} allowFontScaling={false}>
                Call {params.PHONE_NUMBER_DISPATCH_BOULDER}
              </Text>
            </Button>
            <Text style={commonStyles.text}>
              {params.PHONE_TEXT_DISPATCH_GILPEN}
            </Text>
            <Button
              style={[commonStyles.button, commonStyles.dispatch]}
              onPress={() =>
                this.makePhoneCall(params.PHONE_NUMBER_DISPATCH_GILPEN)}
            >
              <Text style={styles.buttonText} allowFontScaling={false}>
                Call {params.PHONE_NUMBER_DISPATCH_GILPEN}
              </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(PhoneNumbers);
