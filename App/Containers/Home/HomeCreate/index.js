import React from 'react';
import {View} from 'react-native';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import CBAppBar from '../../../Components/CBAppBar';
import CreateChatSVG from '../../../assets/svgs/CreateChatSVG';
import ProfileItemBtn from '../../MyProfile/ProfileItemBtn';
import * as NavigationService from '../../../Navigators/NavigationService';
import {scale} from '../../../Utils/scale';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function HomeCreate() {
  const {colors} = useTheme();
  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Create'} backHidden={true} onPress={() => {}} />

      <ProfileItemBtn
        style={{marginTop: scale(20)}}
        icon={CreateChatSVG}
        label={'Add New Group'}
        onPress={() => NavigationService.navigate('NewGroup')}
      />
    </View>
  );
}
