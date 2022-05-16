import {StyleSheet} from 'react-native';
import Constants from '../../../Constants/Constants';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import {scale} from '../../../Utils/scale';

export const styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: Constants.appDefaultPadding,
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: scale(60),
    },
    subView: {
      width: '100%',
    },
    subTitle: {
      ...ApplicationStyles(Colors).MediumFont,
      marginTop: scale(0),
      color: Colors.input1,
    },

    otpContainer: {
      marginVertical: scale(16),
      height: scale(46),
      borderRadius: scale(8),
      borderWidth: 2,
      borderColor: Colors.inputBorder1,
      paddingHorizontal: scale(20),
    },

    underlineStyleBase: {
      width: scale(24),
      height: scale(30),
      padding: 0,
      borderWidth: 0,
      ...ApplicationStyles(Colors).BoldFont,
      color: Colors.inputBorder1,
    },

    underlineStyleHighLighted: {
      width: scale(24),
      height: scale(1),
      borderBottomWidth: 2,
      borderColor: Colors.inputBorder1,
      position: 'absolute',
      top: scale(15),
    },
  });
