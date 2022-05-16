import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';

export default function AuthButton(props) {
  const {label, style, onPress} = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles(colors).container, style]}
      onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={269.88}
        angleCenter={{x: 0.5, y: 0.5}}
        locations={[0, 1.0]}
        colors={colors.authBtnColors}
        style={styles(colors).gradient}>
        <Text style={styles(colors).text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      marginVertical: scale(10),
    },
    gradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(10),
      paddingVertical: scale(17),
    },
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.authBtnText,
      textTransform: 'uppercase',
    },
  });
