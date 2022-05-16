import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../Navigators/NavigationService';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBSvg from '../../assets/svgs/CBSvg';
import LeftArrowSVG from '../../assets/svgs/LeftArrowSVG';
import {useTheme} from '../../Providers/ThemeProvider';

export default function AuthBack() {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles(colors).container}
      onPress={() => NavigationService.goBack()}>
      <CBSvg
        icon={LeftArrowSVG}
        width={scale(8)}
        height={scale(15)}
        color={colors.black}
      />
      <Text style={styles(colors).text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: scale(10),
      alignItems: 'center',
    },
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      marginLeft: scale(8),
      lineHeight: scale(22),
      color: Colors.input1,
    },
  });
