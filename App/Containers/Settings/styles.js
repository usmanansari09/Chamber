import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';

export const styles = colors =>
  StyleSheet.create({
    mainContainer: {
      marginVertical: scale(8),
      marginHorizontal: scale(12),
    },
    itemsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(12),
    },
    title: {
      marginLeft: scale(8),
      ...ApplicationStyles(colors).SemiBoldFont,
      fontSize: scale(16),
      letterSpacing: -0.01,
      color: colors.black,
    },
  });
