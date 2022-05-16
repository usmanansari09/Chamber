import {StyleSheet} from 'react-native';

export const styles = Colors =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },
  });
