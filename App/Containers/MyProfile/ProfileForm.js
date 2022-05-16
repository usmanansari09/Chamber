import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';
import {getDeviceHeight} from '../../Utils/extension';
import CBAppBar from '../../Components/CBAppBar';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import CBAvatar from '../../Components/CBAvatar';
import {scale} from '../../Utils/scale';
import UserService from '../../Utils/UserService';
import CBSvg from '../../assets/svgs/CBSvg';
import CallSVG from '../../assets/svgs/CallSVG';
import ProfileItemBtn from './ProfileItemBtn';
import TermsSVG from '../../assets/svgs/TermsSVG';
import PrivacySVG from '../../assets/svgs/PrivacySVG';
import AboutSVG from '../../assets/svgs/AboutSVG';
import LogOutSVG from '../../assets/svgs/LogOutSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import * as NavigationService from '../../Navigators/NavigationService';
import Settings from '../../assets/svgs/Settings';
import APIManager from '../../Network/APIManager';

export default function ProfileForm(props) {
  const {user, handleOpenBS, handleOpenProfileBS, fall} = props;
  const {colors} = useTheme();

  // useEffect(() => {
  //   APIManager.getTerms().then(res => {
  //     console.log(res);
  //   });
  // }, []);

  const goToPage = title => {
    NavigationService.navigate('AboutPage', {title});
  };

  return (
    <Animated.View
      style={{
        ...ApplicationStyles(colors).fullView,
        opacity: Animated.add(0.6, Animated.multiply(fall, 0.9)),
        minHeight: getDeviceHeight(),
      }}>
      <CBAppBar />
      <View style={styles(colors).topContainer}>
        <TouchableOpacity
          style={styles(colors).topSubContainer}
          onPress={() => handleOpenProfileBS()}>
          <CBAvatar size={scale(64)} uri={user.image} />
          <Text style={styles(colors).profileTitle}>
            {UserService.getUserName(user)}
          </Text>
        </TouchableOpacity>
        <View style={[styles(colors).topSubContainer, {marginLeft: scale(25)}]}>
          <CBSvg icon={CallSVG} width={scale(19.51)} height={scale(19.5)} />
          <Text style={styles(colors).phone}>{user.phone}</Text>
        </View>
      </View>
      <View style={styles(colors).divider} />
      <ProfileItemBtn
        icon={Settings}
        label={'Settings'}
        onPress={() => NavigationService.navigate('Settings')}
      />
      <ProfileItemBtn
        icon={TermsSVG}
        label={'Terms & Conditions'}
        onPress={() => goToPage('Terms & Conditions')}
      />
      <ProfileItemBtn
        icon={PrivacySVG}
        label={'Privacy Policy'}
        onPress={() => goToPage('Privacy Policy')}
      />
      <ProfileItemBtn
        icon={AboutSVG}
        label={'About'}
        onPress={() => goToPage('About')}
      />

      <ProfileItemBtn
        isPrimary={false}
        icon={LogOutSVG}
        label={'Logout'}
        style={styles(colors).logout}
        onPress={() => handleOpenBS()}
      />
    </Animated.View>
  );
}
