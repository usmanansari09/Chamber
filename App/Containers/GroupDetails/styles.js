import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/scale';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import Constants from '../../Constants/Constants';

export const styles = Colors =>
  StyleSheet.create({
    avatarContainer: {
      marginTop: scale(20),
      alignItems: 'center',
    },

    groupName: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(24),
      marginTop: scale(10),
      marginHorizontal: scale(20),
      alignSelf: 'center',
      textAlign: 'center',
      color: Colors.black,
    },

    description: {
      ...ApplicationStyles(Colors).MediumFont,
      marginTop: scale(10),
      color: Colors.inputPlaceholder,
      marginHorizontal: scale(24),
      textAlign: 'center',
    },
    moreActions: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      marginTop: scale(20),
      color: Colors.inputPlaceholder,
      marginLeft: Constants.appDefaultPadding,
    },

    addPeople: {
      marginTop: 0,
      paddingHorizontal: 0,
      alignItems: 'center',
    },
    leaveGroup: {
      width: scale(54),
      height: scale(54),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(33, 33, 33, 0.08)',
      borderRadius: scale(10),
    },

    actions: {
      marginTop: scale(20),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: scale(30),
    },
    actionsItem: {
      marginHorizontal: scale(20),
      alignItems: 'center',
    },
    actionsItemTitle: {
      ...ApplicationStyles(Colors).RegularFont,
      marginTop: scale(8),
      color: Colors.input1,
      fontSize: scale(12),
    },
  });
