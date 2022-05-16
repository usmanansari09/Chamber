import {StyleSheet} from 'react-native';
import Fonts from './Fonts';
import {scale} from './scale';

const ApplicationStyles = Colors => {
  return StyleSheet.create({
    fullView: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },
    animationFullView: {
      flex: 1,
      backgroundColor: '#2c2c2f',
    },

    RegularFont: {
      color: Colors.primaryColor,
      fontFamily: Fonts.Montserrat,
      fontWeight: '400',
      fontSize: scale(14),
      letterSpacing: -0.01,
    },
    MediumFont: {
      color: Colors.primaryColor,
      fontFamily: Fonts.MontserratMedium,
      fontWeight: '500',
      fontSize: scale(14),
      letterSpacing: -0.01,
    },
    BoldFont: {
      color: Colors.primaryColor,
      fontFamily: Fonts.MontserratBold,
      fontWeight: '700',
      fontSize: scale(14),
      letterSpacing: -0.01,
    },
    SemiBoldFont: {
      color: Colors.primaryColor,
      fontFamily: Fonts.MontserratSemiBold,
      fontWeight: '600',
      fontSize: scale(14),
      letterSpacing: -0.01,
    },

    authTitle: {
      color: Colors.authTitleColor,
      fontFamily: Fonts.Montserrat,
      fontWeight: '400',
      fontSize: scale(36),
      lineHeight: scale(36),
      marginBottom: scale(18),
      letterSpacing: -0.01,
    },
  });
};

export default ApplicationStyles;
