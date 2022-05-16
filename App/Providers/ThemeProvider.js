import * as React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {darkColors, lightColors} from '../Utils/Colors';
import HelperService from '../Utils/HelperService';

export const ThemeContext = React.createContext({
  darkMode: 'dark',
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
  setDarkMode: () => {},
});

export const ThemeProvider = props => {
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference

  const [darkMode, setDarkMode] = React.useState('dark');
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  React.useEffect(() => {
    HelperService.getUserTheme().then(d => {
      setDarkMode(d);
    });
  }, []);

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    darkMode,
    isDark: darkMode === 'dark' ? true : darkMode === 'light' ? false : isDark,
    colors:
      darkMode === 'dark'
        ? darkColors
        : darkMode === 'light'
        ? lightColors
        : isDark
        ? darkColors
        : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
    setDarkMode: d => {
      setDarkMode(d);
      HelperService.storeUserTheme(d);
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
