import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function CBSvg(props) {
  const {icon, width, height, color, extraColor} = props;

  let generatedIcon = icon;

  if (color) {
    generatedIcon = generatedIcon.replace(/#FFFFFF/g, color);
  }

  if (extraColor) {
    generatedIcon = generatedIcon.replace(/#000000/g, extraColor);
  }

  return <SvgXml width={width} height={height} xml={generatedIcon} />;
}
