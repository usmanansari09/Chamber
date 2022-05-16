import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {scale} from '../Utils/scale';
import ApplicationStyles from '../Utils/ApplicationStyles';

export default class CBInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(null);
  }

  onFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    const {colors, containerStyles} = this.props;
    return (
      <TouchableOpacity
        style={[styles(colors).container, containerStyles]}
        onPress={() => this.onFocus()}
        activeOpacity={0.8}>
        <TextInput
          ref={this.inputRef}
          placeholderTextColor={colors.inputPlaceholder}
          style={[
            styles(colors).textInput,
            this.props.multiline ? {height: scale(80)} : {},
          ]}
          enablesReturnKeyAutomatically
          numberOfLines={1}
          {...this.props}
        />
      </TouchableOpacity>
    );
  }
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: Colors.inputBorder2,
      paddingVertical: scale(10),
    },
    textInput: {
      ...ApplicationStyles(Colors).MediumFont,
      marginHorizontal: scale(12),
      padding: 0,
      color: Colors.black,
    },
  });
