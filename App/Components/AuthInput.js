import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {scale} from '../Utils/scale';
import ApplicationStyles from '../Utils/ApplicationStyles';

export default class AuthInput extends Component {
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
        <TextInput
          ref={this.inputRef}
          placeholderTextColor={colors.inputPlaceholder}
          style={styles(colors).textInput}
          enablesReturnKeyAutomatically
          numberOfLines={1}
          {...this.props}
        />
      </TouchableOpacity>
    );
  }
}

const styles = colors =>
  StyleSheet.create({
    container: {
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: colors.inputBorder1,
      paddingVertical: scale(10),
      marginTop: scale(8),
    },
    textInput: {
      ...ApplicationStyles(colors).MediumFont,
      marginHorizontal: scale(12),
      padding: 0,
      color: colors.input1,
    },
  });
