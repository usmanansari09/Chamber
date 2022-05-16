import {StyleSheet} from 'react-native';
import {scale} from '../../../Utils/scale';
import Constants from '../../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },
    logoContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: scale(97),
    },
    option: {
      marginTop: scale(40),
    },
    sendBtn: {
      marginTop: scale(30),
    },
    mainContainer: {
      width: '100%',
      marginTop: scale(60),
      paddingHorizontal: Constants.appDefaultPadding,
      paddingBottom: scale(100),
    },
  });
