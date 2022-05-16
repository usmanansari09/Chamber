import {StyleSheet} from 'react-native';
import {scale} from '../../../Utils/scale';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import Constants from '../../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    listTitle: {
      ...ApplicationStyles(Colors).BoldFont,
      fontSize: scale(18),
      color: Colors.black,
    },
    allChamberContainer: {
      flex: 1,
      marginTop: scale(30),
      marginHorizontal: Constants.appDefaultPadding,
    },
    chamberItemContainer: {
      marginTop: scale(10),
      alignItems: 'center',
      flexDirection: 'row',
    },
    chamberInfoContainer: {
      marginLeft: scale(12),
      width: '70%',
    },
    chamberCreatedBy: {
      marginTop: scale(3),
      ...ApplicationStyles(Colors).RegularFont,
      fontSize: scale(10),
      color: Colors.black,
    },
    flatList: {
      marginTop: scale(30),
      paddingBottom: scale(100),
    },
  });
