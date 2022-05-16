import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CBSvg from '../assets/svgs/CBSvg';
import PhoneSVG from '../assets/svgs/PhoneSVG';
import {scale} from '../Utils/scale';
import ApplicationStyles from '../Utils/ApplicationStyles';

export default class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(null);
  }

  onFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    const {colors} = this.props;
    return (
      <TouchableOpacity
        style={styles(colors).container}
        onPress={() => this.onFocus()}
        activeOpacity={0.8}>
        <CBSvg
          icon={PhoneSVG}
          width={scale(19.51)}
          height={scale(19.5)}
          color={colors.gradient1}
          extraColor={colors.gradient2}
        />
        <TextInput
          ref={this.inputRef}
          keyboardType={'decimal-pad'}
          placeholder={'Phone Number'}
          placeholderTextColor={colors.inputPlaceholder}
          style={styles(colors).textInput}
          enablesReturnKeyAutomatically
          returnKeyType="default"
          numberOfLines={1}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </TouchableOpacity>
    );
  }
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: Colors.inputBorder1,
      paddingVertical: scale(10),
      paddingHorizontal: scale(12),
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      ...ApplicationStyles(Colors).MediumFont,
      paddingVertical: 0,
      marginHorizontal: scale(12),
      color: Colors.input1,
    },
  });
