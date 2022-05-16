import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    avatarContainer: {
      marginTop: scale(20),
      alignItems: 'center',
    },

    userName: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(24),
      marginTop: scale(10),
      marginHorizontal: scale(20),
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.black,
    },

    phone: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(18),
      marginTop: scale(10),
      marginHorizontal: scale(20),
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.secondaryColor,
    },

    talking: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(14),
      marginHorizontal: scale(10),
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.authTitleColor,
    },
  });
