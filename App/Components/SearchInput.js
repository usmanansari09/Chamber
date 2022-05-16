import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CBSvg from '../assets/svgs/CBSvg';
import {scale} from '../Utils/scale';
import ApplicationStyles from '../Utils/ApplicationStyles';
import SearchSVG from '../assets/svgs/SearchSVG';
import CloseSVG from '../assets/svgs/CloseSVG';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(null);
  }

  onFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    const {colors, style, isPrimary = false, onClose} = this.props;
    return (
      <TouchableOpacity
        style={[styles(colors).container, style]}
        onPress={() => this.onFocus()}
        activeOpacity={0.8}>
        {isPrimary && (
          <CBSvg
            icon={SearchSVG}
            width={scale(19.51)}
            height={scale(19.5)}
            color={colors.search}
          />
        )}
        <TextInput
          ref={this.inputRef}
          autoComplete="off"
          autoCorrect={false}
          spellCheck={false}
          placeholder={this.props.placeholder ?? 'Name'}
          placeholderTextColor={colors.inputPlaceholder}
          style={[
            styles(colors).textInput,
            isPrimary && {marginLeft: scale(10)},
          ]}
          enablesReturnKeyAutomatically
          returnKeyType={this.props.returnKeyType ?? 'search'}
          numberOfLines={1}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
        <TouchableOpacity
          disabled={!isPrimary}
          style={{
            width: scale(22),
            height: scale(22),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => onClose()}>
          <CBSvg
            icon={isPrimary ? CloseSVG : SearchSVG}
            width={scale(isPrimary ? 16 : 19.51)}
            height={scale(isPrimary ? 16 : 19.5)}
            color={colors.search}
          />
        </TouchableOpacity>
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
      marginRight: scale(12),
      paddingVertical: 0,
      color: Colors.input1,
    },
  });
