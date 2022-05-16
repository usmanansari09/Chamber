import React, {useEffect, useState} from 'react';
import CBAppBar from '../../Components/CBAppBar';
import ChatEngine from './ChatEngine';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import OptionsMenu from 'react-native-option-menu';
import EFonts from 'react-native-vector-icons/Entypo';
import {scale} from '../../Utils/scale';
import * as NavigationService from '../../Navigators/NavigationService';
import {useTheme} from '../../Providers/ThemeProvider';
import APIManager from '../../Network/APIManager';
import UserService from '../../Utils/UserService';
import connect from 'react-redux/lib/connect/connect';

function ChatScreen(props) {
  const [group, setGroup] = useState(props.navigation.getParam('item'));

  useEffect(() => {
    APIManager.fetchGroup(group.id).then(res => {
      console.log(res);
      setGroup(res);
    });
  }, [group.id]);
  const {colors} = useTheme();

  const onPressDetails = () => {
    if (group.group_chat) {
      NavigationService.navigate('GroupDetails', {
        group,
        onChanged: g => setGroup(g),
      });
    } else {
      NavigationService.navigate('UserDetails', {group});
    }
  };

  const renderHeaderRight = () => {
    return (
      <OptionsMenu
        customButton={
          <EFonts
            name="dots-three-vertical"
            size={scale(24)}
            color={colors.black}
          />
        }
        destructiveIndex={1}
        options={['Details', 'Cancel']}
        actions={[onPressDetails]}
      />
    );
  };

  return (
    <>
      <CBAppBar
        image={UserService.getGroupImage(group, props.user)}
        title={UserService.getGroupName(group, props.user)}
        renderHeaderRight={renderHeaderRight}
      />
      {/*<KeyboardAwareScrollView*/}
      {/*  bounces={false}*/}
      {/*  nestedScrollEnabled = {true}*/}
      {/*  style={ApplicationStyles(colors).fullView}*/}
      {/*  contentContainerStyle={{flex: 1}}>*/}
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 28}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={ApplicationStyles(colors).fullView}>
        <View style={{flex: 1}}>
          <ChatEngine group={group} />
        </View>
      </KeyboardAvoidingView>

      {/*</KeyboardAwareScrollView>*/}
    </>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

export default connect(mapStateToProps, null)(ChatScreen);
