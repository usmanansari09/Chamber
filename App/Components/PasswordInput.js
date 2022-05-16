import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CBSvg from '../assets/svgs/CBSvg';
import {scale} from '../Utils/scale';
import KeySVG from '../assets/svgs/KeySVG';
import ApplicationStyles from '../Utils/ApplicationStyles';

export default class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.passwordRef = React.createRef(null);
  }

  onFocus = () => {
    this.passwordRef.current.focus();
  };

  render() {
    const {colors} = this.props;
    return (
      <TouchableOpacity
        style={styles(colors).container}
        onPress={() => this.onFocus()}
        activeOpacity={0.8}>
        <CBSvg
          icon={KeySVG}
          width={scale(19.51)}
          height={scale(19.5)}
          color={colors.gradient1}
          extraColor={colors.gradient2}
        />
        <TextInput
          ref={this.passwordRef}
          autoComplete="off"
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          placeholder={this.props.placeholder ?? 'Password'}
          placeholderTextColor={colors.inputPlaceholder}
          style={styles(colors).textInput}
          enablesReturnKeyAutomatically
          returnKeyType={this.props.returnKeyType ?? 'go'}
          numberOfLines={1}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          blurOnSubmit={true}
          onSubmitEditing={() => this.props.onNext()}
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
      marginTop: scale(8),
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      ...ApplicationStyles(Colors).MediumFont,
      marginHorizontal: scale(12),
      paddingVertical: 0,
      color: Colors.input1,
    },
  });
