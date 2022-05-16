import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    headerContainer: {
      marginHorizontal: Constants.appDefaultPadding,
    },
    title: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(16),
      marginTop: scale(24),
      marginBottom: scale(8),
      color: Colors.black,
    },
    chamberName: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(24),
      color: Colors.mTime,
      marginRight: scale(6),
      width: scale(300),
    },
    moreActions: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      marginTop: scale(20),
      color: Colors.inputPlaceholder,
    },
    inviteBtn: {
      marginTop: scale(20),
      paddingHorizontal: 0,
    },
    EditTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
