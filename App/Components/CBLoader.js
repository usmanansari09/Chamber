import React from 'react';
import Spinner from 'react-native-spinkit';
import {Overlay} from 'react-native-elements';
import {useTheme} from '../Providers/ThemeProvider';

export default function CBLoader(props) {
  const {colors} = useTheme();
  return (
    <Overlay
      width="auto"
      height="auto"
      overlayStyle={{
        padding: 30,
        borderRadius: 15,
        backgroundColor: colors.primaryColor,
      }}
      isVisible={props.isLoading}>
      <Spinner type="Circle" color={'white'} />
    </Overlay>
  );
}
