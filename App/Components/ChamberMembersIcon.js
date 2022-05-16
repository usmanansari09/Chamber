import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {scale} from '../Utils/scale';

export const ChamberMembersIcon = ({members}) => {
  const Members = ({img, index}) => {
    return (
      <View key={index} style={[styles.userImagePlaceHolder, {zIndex: -index}]}>
        <Image
          resizeMode={'stretch'}
          style={styles.image}
          source={{uri: img}}
        />
      </View>
    );
  };

  if (members?.length > 0) {
    return (
      <View style={styles.usersContainer}>
        {members.map((item, index) => {
          if (index < 3) {
            return <Members img={item?.image} key={index} index={index} />;
          }
        })}
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  userImagePlaceHolder: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(40),
    overflow: 'hidden',
    marginLeft: scale(-17),
    borderWidth: 1,
    borderColor: 'white',
  },
  usersContainer: {
    width: scale(70),
    flexDirection: 'row',
    marginLeft: scale(17),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
