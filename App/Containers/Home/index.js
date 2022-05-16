import React, {useEffect, useRef, useState} from 'react';
import {AppState, View} from 'react-native';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {styles} from './styles';
import HomeChats from './HomeChats';
import HomeCreate from './HomeCreate';
import BottomNavigation from './BottomNavigation';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {useTheme} from '../../Providers/ThemeProvider';
import HomeChamber from './HomeChamber';

function HomeScreen(props) {
  const [bottomIndex, setBottomIndex] = useState(0);
  const {colors} = useTheme();

  const appState = useRef(AppState.currentState);

  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        props.actions.fetchGroups();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.actions.fetchGroups();
  }, [props.actions]);

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <View style={styles.mainContainer}>
        {bottomIndex === 0 && <HomeChats />}
        {bottomIndex === 1 && <HomeCreate />}
        {bottomIndex === 2 && <HomeChamber />}
      </View>
      <BottomNavigation
        bottomIndex={bottomIndex}
        onChange={index => setBottomIndex(index)}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
  groupList: state.User.groupList,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
    fetchGroups: () => {
      dispatch(userActions.fetchGroups());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
