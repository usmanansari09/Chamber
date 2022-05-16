import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './Sagas/store';
import NavigatorProvider from './Navigators/MainNavigator';
import * as NavigationService from './Navigators/NavigationService';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './Providers/ThemeProvider';
import Config from './Constants/Config';
import {PubNubProvider} from 'pubnub-react';
import PubNub from 'pubnub';

const pubnub = new PubNub({
  subscribeKey: Config.pubnubSubscribeKey,
  publishKey: Config.pubnubPublishKey,
  uuid: '0',
});

export default class App extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  renderApp = () => (
    <AppearanceProvider>
      <ThemeProvider>
        <ReduxProvider store={store}>
          <PubNubProvider client={pubnub}>
            <NavigatorProvider
              style={[styles.flex]}
              ref={nav => {
                this.navigator = nav;
              }}
            />
          </PubNubProvider>
        </ReduxProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );

  render = () => this.renderApp();
}

const styles = {flex: {flex: 1}};
