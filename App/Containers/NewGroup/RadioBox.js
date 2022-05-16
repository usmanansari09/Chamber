import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {scale} from '../../Utils/scale';
import CheckSVG from '../../assets/svgs/Check';
import CBSvg from '../../assets/svgs/CBSvg';
import {useTheme} from '../../Providers/ThemeProvider';

export default function RadioBox(props) {
  const {value, onChange} = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles(colors).container}
      onPress={() => onChange(!value)}>
      <View style={styles(colors).checkbox}>
        {value && (
          <CBSvg
            icon={CheckSVG(colors.search)}
            width={scale(14)}
            height={scale(12)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      marginLeft: scale(8),
      marginRight: scale(4),
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: scale(24),
      height: scale(24),
      borderColor: Colors.search,
      borderWidth: scale(4),
      borderRadius: scale(12),
      paddingTop: scale(1),
      paddingLeft: scale(0.5),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
