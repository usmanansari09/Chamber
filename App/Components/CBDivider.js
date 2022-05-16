import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../Providers/ThemeProvider';

export default function CBDivider(props) {
  const {colors} = useTheme();
  return (
    <View
      style={[
        {width: '100%', height: 1, backgroundColor: colors.dividerColor},
        props.style,
      ]}
    />
  );
}
