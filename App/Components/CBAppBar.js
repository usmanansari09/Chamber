import React from 'react';
import {scale} from '../Utils/scale';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {isIphoneX} from '../Utils/extension';
import ApplicationStyles from '../Utils/ApplicationStyles';
import LeftArrowSVG from '../assets/svgs/LeftArrowSVG';
import CBSvg from '../assets/svgs/CBSvg';
import Constants from '../Constants/Constants';
import * as NavigationService from '../Navigators/NavigationService';
import {useTheme} from '../Providers/ThemeProvider';
import CBAvatar from './CBAvatar';

export default function CBAppBar({
  title,
  image,
  backHidden = false,
  onPress,
  renderHeaderRight,
}) {
  const {colors} = useTheme();
  return (
    <View style={styles(colors).container}>
      <TouchableOpacity
        style={styles(colors).subContainer}
        onPress={() => (onPress ? onPress() : NavigationService.goBack())}>
        {!backHidden && (
          <CBSvg
            icon={LeftArrowSVG}
            width={scale(12)}
            height={scale(18)}
            color={colors.black}
          />
        )}
        {image && (
          <View style={{marginLeft: scale(12)}}>
            <CBAvatar size={scale(36)} uri={image} />
          </View>
        )}
        <Text style={styles(colors).title} numberOfLines={1}>
          {title ?? 'You'}
        </Text>
      </TouchableOpacity>
      {renderHeaderRight && renderHeaderRight()}
    </View>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      height: isIphoneX() ? scale(104) : scale(80),
      backgroundColor: Colors.secondBack,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingHorizontal: Constants.appDefaultPadding,
      paddingBottom: scale(8),
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      ...ApplicationStyles(Colors).BoldFont,
      color: Colors.black,
      fontSize: scale(24),
      letterSpacing: -0.01,
      marginLeft: scale(12),
      maxWidth: scale(260),
    },
  });
