import React, {useRef, useState} from 'react';
import {View} from 'react-native';

import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {useTheme} from '../../Providers/ThemeProvider';

function AboutPage(props) {
  const {colors} = useTheme();

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={props.navigation.getParam('title')} />
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
