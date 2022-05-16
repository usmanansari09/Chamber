import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../../Providers/ThemeProvider';

export default function AuthBG() {
  const {colors} = useTheme();
  return (
    <LinearGradient
      useAngle={true}
      angle={30}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      angleCenter={{x: 0.5, y: 0.5}}
      locations={[0, 0.3, 0.7, 1.0]}
      colors={colors.authBackColors}
      style={styles(colors).gradient}
    />
  );
}

const styles = Colors =>
  StyleSheet.create({
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.5,
    },
  });
