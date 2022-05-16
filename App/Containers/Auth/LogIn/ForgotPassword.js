import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../../Utils/scale';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import * as NavigationService from '../../../Navigators/NavigationService';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function ForgotPassword() {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles(colors).container}
      onPress={() => NavigationService.navigate('ResetPassword')}>
      <Text style={styles(colors).text}>Forgot Password</Text>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      marginVertical: scale(10),
      paddingVertical: scale(10),
      alignSelf: 'flex-start',
    },
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.input1,
    },
  });
