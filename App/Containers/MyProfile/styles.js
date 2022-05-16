import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';
import {isIphoneX} from '../../Utils/extension';

export const styles = colors =>
  StyleSheet.create({
    topContainer: {
      marginHorizontal: Constants.appDefaultPadding,
    },
    topSubContainer: {
      marginTop: scale(18),
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileTitle: {
      marginLeft: scale(14.95),
      ...ApplicationStyles(colors).SemiBoldFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: colors.black,
    },

    phone: {
      marginLeft: scale(8.95),
      ...ApplicationStyles(colors).MediumFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: colors.black,
    },
    divider: {
      width: '100%',
      height: 2,
      backgroundColor: 'rgba(33, 33, 33, 0.08)',
      marginTop: scale(20),
      marginBottom: scale(10),
    },
    logout: {
      marginTop: 'auto',
      marginBottom: isIphoneX() ? scale(40) : scale(20),
    },
  });
