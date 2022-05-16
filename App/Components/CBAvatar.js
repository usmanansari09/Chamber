import React from 'react';
import {Image} from 'react-native';
import Images from '../Utils/Images';

export default function CBAvatar(props) {
  const {size, image = Images.ic_profile, uri} = props;
  return (
    <Image
      source={uri ? {uri: uri.slice(0, uri.indexOf('?'))} : image}
      resizeMode={'cover'}
      style={{width: size, height: size, borderRadius: size / 2}}
    />
  );
}
