import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';

export default function AOButton(props) {
  const {label, onPress} = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles(colors).container} onPress={onPress}>
      <Text style={styles(colors).text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      paddingVertical: scale(10),
      alignSelf: 'center',
    },
    text: {
      ...ApplicationStyles(Colors).BoldFont,
      color: Colors.secondaryColor,
    },
  });
