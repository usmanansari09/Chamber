import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CBAvatar from '../../Components/CBAvatar';
import {scale} from '../../Utils/scale';
import Constants from '../../Constants/Constants';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import React from 'react';
import {useTheme} from '../../Providers/ThemeProvider';

export default function PeopleItem({item, index, renderRight}) {
  const {colors} = useTheme();
  return (
    <View key={index} style={styles(colors).mainContainer} onPress={() => {}}>
      <View style={styles(colors).container}>
        <CBAvatar size={scale(40)} uri={item.image} />
        <View style={styles(colors).subContainer}>
          <View style={styles(colors).topContainer}>
            <Text
              style={
                styles(colors).name
              }>{`${item.first_name} ${item.last_name}`}</Text>
          </View>
        </View>
        {renderRight && renderRight()}
      </View>
      <View style={styles(colors).divider} />
    </View>
  );
}

const styles = Colors =>
  StyleSheet.create({
    mainContainer: {
      marginHorizontal: Constants.appDefaultPadding,
    },
    container: {
      flexDirection: 'row',
      marginTop: scale(12),
      alignItems: 'center',
    },
    subContainer: {
      flex: 1,
      marginLeft: scale(16),
    },
    topContainer: {
      flex: 1,
      marginTop: scale(2),
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: Colors.black,
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.dividerColor,
      marginTop: scale(8),
    },
  });
