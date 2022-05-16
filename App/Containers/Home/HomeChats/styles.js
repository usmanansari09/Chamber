import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import {scale} from '../../../Utils/scale';
import {isIphoneX} from '../../../Utils/extension';
import Constants from '../../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    headerContainer: {
      marginTop: scale(isIphoneX() ? 36 : 12),
      marginHorizontal: Constants.appDefaultPadding,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: scale(48),
      alignItems: 'center',
    },
    title: {
      ...ApplicationStyles(Colors).BoldFont,
      fontSize: scale(24),
      letterSpacing: -0.01,
      color: Colors.black,
    },

    profileContainer: {
      marginTop: scale(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileTitle: {
      marginLeft: scale(14.95),
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: Colors.black,
    },

    listTitle: {
      marginTop: scale(18),
      ...ApplicationStyles(Colors).BoldFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: Colors.inputPlaceholder,
    },
  });
