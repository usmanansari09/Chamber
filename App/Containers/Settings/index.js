import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CBAppBar from '../../Components/CBAppBar';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';
import RadioBox from '../NewGroup/RadioBox';
import {styles} from './styles';

export default function SettingsScreen() {
  const {colors, darkMode, setDarkMode} = useTheme();
  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Settings'} />
      <View style={styles(colors).mainContainer}>
        <TouchableOpacity
          style={styles(colors).itemsContainer}
          onPress={() => setDarkMode('dark')}>
          <RadioBox
            value={darkMode === 'dark'}
            onChange={() => setDarkMode('dark')}
          />
          <Text style={styles(colors).title}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(colors).itemsContainer}
          onPress={() => setDarkMode('light')}>
          <RadioBox
            value={darkMode === 'light'}
            onChange={() => setDarkMode('light')}
          />
          <Text style={styles(colors).title}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(colors).itemsContainer}
          onPress={() => setDarkMode('default')}>
          <RadioBox
            value={darkMode === 'default'}
            onChange={() => setDarkMode('default')}
          />
          <Text style={styles(colors).title}>System Default</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
