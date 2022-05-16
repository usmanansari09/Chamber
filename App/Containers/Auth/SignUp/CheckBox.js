import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../../../Utils/scale';
import CheckSVG from '../../../assets/svgs/Check';
import CBSvg from '../../../assets/svgs/CBSvg';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function CheckBox(props) {
  const {value, onChange} = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles(colors).container}
      onPress={() => onChange(!value)}>
      <View style={styles(colors).checkbox}>
        {value && (
          <CBSvg
            icon={CheckSVG(colors.checkBox)}
            width={scale(14)}
            height={scale(12)}
          />
        )}
      </View>
      <Text style={styles(colors).text}> Agree to</Text>
      <TouchableOpacity>
        <Text style={[styles(colors).text, styles(colors).terms]}>
          {' '}
          Terms & conditions{' '}
        </Text>
      </TouchableOpacity>
      <Text style={styles(colors).text}>and</Text>
      <TouchableOpacity>
        <Text style={[styles(colors).text, styles(colors).terms]}>
          {' '}
          Privacy policy
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = Colors =>
  StyleSheet.create({
    text: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      color: Colors.black,
    },
    terms: {
      color: Colors.secondaryColor,
      textDecorationLine: 'underline',
    },
    container: {
      marginTop: scale(20),
      marginLeft: scale(2),
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: scale(24),
      height: scale(24),
      borderColor: Colors.checkBox,
      borderWidth: scale(4),
      borderRadius: scale(6),
      paddingTop: scale(1),
      paddingLeft: scale(0.5),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
