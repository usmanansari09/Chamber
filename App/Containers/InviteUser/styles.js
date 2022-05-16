import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';

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
    inputContainer: {
      marginTop: scale(10),
      width: scale(300),
    },
    buttonContainer: {
      marginHorizontal: Constants.appDefaultPadding,
    },
  });
