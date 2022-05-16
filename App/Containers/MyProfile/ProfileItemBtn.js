import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';
import CBSvg from '../../assets/svgs/CBSvg';
import {useTheme} from '../../Providers/ThemeProvider';

export default function ProfileItemBtn(props) {
  const {label, icon, style, onPress, isPrimary = true} = props;
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
        colors={
          isPrimary
            ? ['#152044', '#233571']
            : [colors.backgroundColor, colors.backgroundColor]
        }
        style={[
          styles(colors).gradient,
          !isPrimary && {borderWidth: 2.5, borderColor: colors.primaryColor},
        ]}>
        {icon && <CBSvg icon={icon} width={scale(22)} height={scale(22)} />}
        {label && (
          <Text
            style={[styles(colors).text, !isPrimary && {color: colors.black}]}>
            {label}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      marginTop: scale(10),
      paddingHorizontal: Constants.appDefaultPadding,
    },
    gradient: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: scale(10),
      paddingVertical: scale(17),
      paddingHorizontal: scale(18),
    },
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(18),
      color: 'white',
      marginLeft: scale(12),
    },
  });
