import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {scale} from '../../Utils/scale';
import CBAvatar from '../../Components/CBAvatar';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import CreateChatSVG from '../../assets/svgs/CreateChatSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import UserService from '../../Utils/UserService';
import * as NavigationService from '../../Navigators/NavigationService';

function UserDetailsScreen(props) {
  const {colors} = useTheme();
  const group = props.navigation.getParam('group');
  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Details'} />

      <View style={styles(colors).avatarContainer}>
        <CBAvatar
          size={scale(96)}
          uri={UserService.getGroupImage(group, props.user)}
        />
      </View>
      <Text style={styles(colors).userName}>
        {UserService.getGroupName(group, props.user)}
      </Text>
      <Text style={styles(colors).moreActions}>MORE ACTIONS</Text>
      <ProfileItemBtn
        style={{marginTop: scale(10)}}
        icon={CreateChatSVG}
        label={'View Documents'}
        onPress={() => NavigationService.navigate('DocumentPreview', {group})}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsScreen);
