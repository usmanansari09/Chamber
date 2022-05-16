import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getDeviceHeight} from '../../Utils/extension';
import {scale} from '../../Utils/scale';
import BottomSheet from 'reanimated-bottom-sheet';
import CBDivider from '../../Components/CBDivider';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';

/**
 * CameraChooseBS
 *
 * @param {object} ref RefObject
 * @param {function} onPressCamera
 * @param {function} onPressPL
 */

const CameraChooseBS = React.forwardRef((props, ref) => {
  const {colors} = useTheme();

  const renderContent = () => {
    const {onPressCamera, onPressPL} = props;
    return (
      <View style={{height: getDeviceHeight()}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => ref.current.snapTo(0)}
          activeOpacity={1.0}
        />
        <View style={styles(colors).container}>
          <View style={styles(colors).subContainer}>
            <View style={styles(colors).itemContainer}>
              <Text style={styles(colors).title}>
                Pick an image from your camera or photo library
              </Text>
            </View>
            <CBDivider />
            <TouchableOpacity
              style={styles(colors).itemContainer}
              onPress={() => onPressCamera()}>
              <Text style={styles(colors).action}>Camera</Text>
            </TouchableOpacity>
            <CBDivider />
            <TouchableOpacity
              style={styles(colors).itemContainer}
              onPress={() => onPressPL()}>
              <Text style={styles(colors).action}>Photo Library</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles(colors).subContainer, styles(colors).extraBottom]}>
            <TouchableOpacity
              style={styles(colors).itemContainer}
              onPress={() => ref.current.snapTo(0)}>
              <Text style={styles(colors).cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={[0, getDeviceHeight()]}
      borderRadius={scale(10)}
      renderContent={renderContent}
      enabledGestureInteraction={false}
      {...props}
    />
  );
});

export default CameraChooseBS;

const styles = Colors =>
  StyleSheet.create({
    container: {
      height: scale(200),
    },

    subContainer: {
      backgroundColor: Colors.white,
      borderRadius: scale(10),
      width: '100%',
    },
    extraBottom: {
      flex: 1,
      marginTop: scale(8),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    itemContainer: {
      padding: scale(14),
      alignItems: 'center',
    },

    title: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      color: Colors.black,
    },
    action: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.black,
    },
    cancel: {
      ...ApplicationStyles(Colors).MediumFont,
      color: '#5D5FEF',
    },
  });
