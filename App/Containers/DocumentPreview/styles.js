import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';

export const styles = Colors =>
  StyleSheet.create({
    download: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      color: Colors.black,
      paddingBottom: scale(4),
    },

    flatList: {
      flex: 1,
      paddingTop: scale(12),
      paddingHorizontal: scale(14),
    },

    itemContainer: {
      width: scale(104),
      height: scale(96),
      borderRadius: scale(8),
      marginVertical: scale(8),
      marginHorizontal: scale(6),
      overflow: 'hidden',
    },

    name: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      color: 'white',
      marginTop: scale(8),
    },
  });
