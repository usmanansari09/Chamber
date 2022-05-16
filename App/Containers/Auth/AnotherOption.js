import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';

export default function AnotherOption(props) {
  const {label, style} = props;
  const {colors} = useTheme();
  return (
    <View style={[styles(colors).container, style]}>
      <Text style={styles(colors).text}>{label}</Text>
    </View>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      marginTop: scale(24),
      width: '100%',
      alignItems: 'center',
    },
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.anotherOptionColor,
    },
  });
