import React from 'react';
import LogoSVG from '../assets/svgs/LogoSVG';
import {scale} from '../Utils/scale';
import CBSvg from '../assets/svgs/CBSvg';
import {useTheme} from '../Providers/ThemeProvider';

export default function CBLogo() {
  const {colors} = useTheme();
  return (
    <CBSvg
      icon={LogoSVG(colors.black)}
      width={scale(197.13)}
      height={scale(174.43)}
    />
  );
}
