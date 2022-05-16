import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {scale} from '../../Utils/scale';
import {isIphoneX} from '../../Utils/extension';
import LinearGradient from 'react-native-linear-gradient';
import ChatSVG from '../../assets/svgs/ChatSVG';
import CreateSVG from '../../assets/svgs/CreateSVG';
import CBSvg from '../../assets/svgs/CBSvg';
import {useTheme} from '../../Providers/ThemeProvider';

export default function BottomNavigation(props) {
  const {colors} = useTheme();

  const renderItem = (index, label, icon) => {
    const {bottomIndex, onChange} = props;
    return (
      <TouchableOpacity key={`${index}`} onPress={() => onChange(index)}>
        <View
          style={[
            styles(colors).itemContainer,
            {opacity: index === bottomIndex ? 1 : 0.5},
          ]}>
          <CBSvg icon={icon} width={scale(28)} height={scale(26)} />
          <Text style={styles(colors).label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      useAngle={true}
      angle={269.88}
      angleCenter={{x: 0.5, y: 0.5}}
      locations={[0, 1.0]}
      colors={['#152044', '#233571']}
      style={styles(colors).container}>
      {renderItem(0, 'Chats', ChatSVG)}
      {/*{renderItem(1, 'Create', CreateSVG)}*/}
      {renderItem(2, 'Chamber', CreateSVG)}
    </LinearGradient>
  );
}

const styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      height: scale(isIphoneX() ? 93 : 73),
      paddingBottom: scale(isIphoneX() ? 20 : 4),
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    itemContainer: {
      alignItems: 'center',
    },
    label: {
      ...ApplicationStyles(Colors).MediumFont,
      color: 'white',
      fontSize: scale(12),
      marginTop: scale(4),
      letterSpacing: -0.01,
    },
  });
