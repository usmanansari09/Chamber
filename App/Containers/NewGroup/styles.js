import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';
import {isIphoneX} from '../../Utils/extension';

const pictureSize = scale(90);

export const peopleStyles = colors =>
  StyleSheet.create({
    headerContainer: {
      marginHorizontal: Constants.appDefaultPadding,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: scale(isIphoneX() ? 48 : 24),
    },
    title: {
      ...ApplicationStyles(colors).RegularFont,
      fontSize: scale(14),
      color: colors.black,
    },
    done: {
      ...ApplicationStyles(colors).RegularFont,
      fontSize: scale(14),
      color: colors.done,
    },

    suggest: {
      marginHorizontal: Constants.appDefaultPadding,
      marginTop: scale(18),
      marginBottom: scale(8),
      ...ApplicationStyles(colors).MediumFont,
      fontSize: scale(16),
      letterSpacing: -0.01,
      color: colors.hintColor,
    },
  });

export const styles = colors =>
  StyleSheet.create({
    subContainer: {
      flex: 1,
      marginHorizontal: Constants.appDefaultPadding,
      paddingBottom: scale(20),
    },
    title: {
      ...ApplicationStyles(colors).SemiBoldFont,
      fontSize: scale(18),
      marginTop: scale(24),
      marginBottom: scale(8),
      color: colors.black,
    },

    pictureBtn: {
      borderRadius: scale(8),
      borderColor: colors.inputBorder2,
      borderWidth: 1,
      width: pictureSize,
      height: pictureSize,
    },
    cameraIcon: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
