import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getDeviceHeight} from '../../Utils/extension';
import {scale} from '../../Utils/scale';
import BottomSheet from 'reanimated-bottom-sheet';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBSvg from '../../assets/svgs/CBSvg';
import CloseSVG from '../../assets/svgs/CloseSVG';
import CBAvatar from '../../Components/CBAvatar';
import CameraSVG from '../../assets/svgs/CameraSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';

/**
 * EditGroupBS
 * a bottom sheet to edit profile
 *
 * @param {object} ref RefObject
 * @param {object} group
 * @param {number} extraHeight
 * @param {function} onPressConfirm
 * @param {function} onPressAvatar
 */

const EditGroupBS = React.forwardRef((props, ref) => {
  const {group} = props;
  const image = group.image;

  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);

  const nameInputRef = React.useRef(null);
  const desInputRef = React.useRef(null);
  const {colors} = useTheme();

  const onClose = () => {
    Keyboard.dismiss();
    ref.current.snapTo(0);
  };

  const renderContent = () => {
    const {onPressConfirm, onPressAvatar} = props;
    return (
      <View style={{height: getDeviceHeight()}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => onClose()}
          activeOpacity={1.0}
        />
        <View
          style={[
            styles(colors).container,
            {height: scale(314) + props.extraHeight},
          ]}>
          <View style={styles(colors).subContainer}>
            <TouchableOpacity onPress={() => onClose()}>
              <CBSvg
                icon={CloseSVG}
                width={scale(16)}
                height={scale(16)}
                color={colors.black}
              />
            </TouchableOpacity>
            <Text style={styles(colors).title}>Edit Profile</Text>
            <TouchableOpacity
              onPress={() => {
                if (name === '') {
                  DialogUtil.showWarning('The name field is required');
                  return;
                }
                if (description === '') {
                  DialogUtil.showWarning('The description field is required');
                  return;
                }
                onClose();
                onPressConfirm(name, description);
              }}>
              <Text style={styles(colors).save}>Save</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles(colors).avatarContainer}
            onPress={() => {
              onClose();
              onPressAvatar();
            }}>
            <CBAvatar size={scale(103.73)} uri={image} />
            <View style={styles(colors).cameraIcon}>
              <CBSvg icon={CameraSVG} width={scale(20)} height={scale(17)} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(colors).inputContainer}
            onPress={() => nameInputRef.current.focus()}
            activeOpacity={0.8}>
            <TextInput
              ref={nameInputRef}
              returnKeyType={'next'}
              placeholderTextColor={colors.inputPlaceholder}
              style={styles(colors).textInput}
              enablesReturnKeyAutomatically
              numberOfLines={1}
              placeholder={'Business Conversation'}
              value={name}
              onChangeText={text => setName(text)}
              onSubmitEditing={() => desInputRef.current.focus()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(colors).inputContainer}
            onPress={() => desInputRef.current.focus()}
            activeOpacity={0.8}>
            <TextInput
              ref={desInputRef}
              returnKeyType={'done'}
              placeholderTextColor={colors.inputPlaceholder}
              style={styles(colors).textInput}
              enablesReturnKeyAutomatically
              numberOfLines={1}
              placeholder={'Description'}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </TouchableOpacity>
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

export default EditGroupBS;

const styles = Colors =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      borderTopLeftRadius: scale(10),
      borderTopRightRadius: scale(10),
    },
    avatarContainer: {
      marginTop: scale(20),
      alignSelf: 'center',
    },
    subContainer: {
      paddingHorizontal: scale(20),
      paddingTop: scale(16),
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputContainer: {
      borderRadius: scale(4),
      borderWidth: 2,
      borderColor: Colors.inputBorder2,
      paddingVertical: scale(10),
      marginHorizontal: scale(20),
      marginTop: scale(24),
    },

    cameraIcon: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: scale(8),
    },
    title: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.black,
      marginLeft: scale(20),
    },
    save: {
      ...ApplicationStyles(Colors).MediumFont,
      color: '#5D5FEF',
    },

    textInput: {
      ...ApplicationStyles(Colors).MediumFont,
      marginHorizontal: scale(12),
      color: Colors.input1,
      padding: 0,
    },
  });
