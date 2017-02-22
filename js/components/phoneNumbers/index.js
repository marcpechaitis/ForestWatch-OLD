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
    const phoneURL = 'tel:' + phoneNbrToCall;
    Linking.canOpenURL(phoneURL)
      .then(supported => {
        if (!supported) {
          console.log("Can't call: " + phoneURL);
        } else {
          return Linking.openURL(phoneURL);
        }
      })
      .catch(error => console.log('An unexpected error happened', error));
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

        <Content style={styles.content}>
          <Card style={styles.card}>
            <Text>
              {params.PHONE_TEXT_EMERGENCY}
            </Text>
            <Button
              style={styles.buttonEmergency}
              onPress={() => Alert.alert(
                'Call ' + params.PHONE_NUMBER_EMERGENCY + '?',
                '',
                [
                  { text: 'Cancel', onPress: () => null },
                  {
                    text: 'Yes',
                    onPress: () =>
                      this.makePhoneCall(params.PHONE_NUMBER_EMERGENCY),
                  },
                ],
              )}
            >
              Call {params.PHONE_NUMBER_EMERGENCY}
            </Button>
            <Text>
              {params.PHONE_TEXT_NON_EMERGENCY}
            </Text>
            <Text style={styles.mt}>
              {params.PHONE_TEXT_DISPATCH_BOULDER}
            </Text>
            <Button
              style={styles.buttonDispatch}
              onPress={() => Alert.alert(
                'Call ' + params.PHONE_NUMBER_DISPATCH_BOULDER + '?',
                '',
                [
                  { text: 'Cancel', onPress: () => null },
                  {
                    text: 'Yes',
                    onPress: () =>
                      this.makePhoneCall(params.PHONE_NUMBER_DISPATCH_BOULDER),
                  },
                ],
              )}
            >
              Call {params.PHONE_NUMBER_DISPATCH_BOULDER}
            </Button>
            <Text>{params.PHONE_TEXT_DISPATCH_GILPEN}</Text>
            <Button
              style={styles.buttonDispatch}
              onPress={() => Alert.alert(
                'Call ' + params.PHONE_NUMBER_DISPATCH_GILPEN + '?',
                '',
                [
                  { text: 'Cancel', onPress: () => null },
                  {
                    text: 'Yes',
                    onPress: () =>
                      this.makePhoneCall(params.PHONE_NUMBER_DISPATCH_GILPEN),
                  },
                ],
              )}
            >
              Call {params.PHONE_NUMBER_DISPATCH_GILPEN}
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
