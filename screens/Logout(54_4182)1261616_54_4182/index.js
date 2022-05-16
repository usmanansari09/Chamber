import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getNavigationScreen} from '@screens';

export class Blank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_54_4271} />
      <View style={styles.View_54_4268}>
        <Text style={styles.Text_54_4268}>
          Are you sure you want to log out?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_57_3650}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('4_29'))
        }>
        <View style={styles.View_57_3649} />
        <View style={styles.View_54_4270}>
          <Text style={styles.Text_54_4270}>Log Out</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_54_4276}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_3887'))
        }>
        <View style={styles.View_54_4272} />
        <View style={styles.View_54_4273}>
          <Text style={styles.Text_54_4273}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_54_4269} />
      <View style={styles.View_54_4274} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(0, 0, 0, 0)'},
  View_2: {height: hp('100%')},
  View_54_4271: {
    width: wp('96%'),
    minWidth: wp('96%'),
    height: hp('42.780748663101605%'),
    minHeight: hp('42.780748663101605%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('4.27807486631016%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_54_4268: {
    width: wp('62.4%'),
    minWidth: wp('62.4%'),
    minHeight: hp('9.090909090909092%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.8%'),
    top: hp('9.090909090909092%'),
    justifyContent: 'flex-start',
  },
  Text_54_4268: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  TouchableOpacity_57_3650: {
    width: wp('96%'),
    minWidth: wp('96%'),
    height: hp('21.390374331550802%'),
    minHeight: hp('21.390374331550802%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('25.668449197860966%'),
  },
  View_57_3649: {
    width: wp('96%'),
    minWidth: wp('96%'),
    height: hp('21.390374331550802%'),
    minHeight: hp('21.390374331550802%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_54_4270: {
    width: wp('15.2%'),
    minWidth: wp('15.2%'),
    minHeight: hp('9.090909090909092%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('40.4%'),
    top: hp('5.6149732620320805%'),
    justifyContent: 'flex-start',
  },
  Text_54_4270: {
    color: 'rgba(176, 0, 32, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  TouchableOpacity_54_4276: {
    width: wp('96%'),
    minWidth: wp('96%'),
    height: hp('21.390374331550802%'),
    minHeight: hp('21.390374331550802%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('51.33689839572193%'),
  },
  View_54_4272: {
    width: wp('96%'),
    minWidth: wp('96%'),
    height: hp('21.390374331550802%'),
    minHeight: hp('21.390374331550802%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_54_4273: {
    width: wp('12.8%'),
    minWidth: wp('12.8%'),
    minHeight: hp('9.090909090909092%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('41.46666666666667%'),
    top: hp('6.149732620320847%'),
    justifyContent: 'flex-start',
  },
  Text_54_4273: {
    color: 'rgba(93, 95, 239, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_54_4269: {
    width: wp('96.26666666666667%'),
    minWidth: wp('96.26666666666667%'),
    height: hp('1.06951871657754%'),
    minHeight: hp('1.06951871657754%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.866666666666667%'),
    top: hp('24.598930481283425%'),
    backgroundColor: 'rgba(33, 33, 33, 1)',
    opacity: 0.07999999821186066,
  },
  View_54_4274: {
    width: wp('35.46666666666667%'),
    height: hp('3.2085561497326207%'),
    minHeight: hp('3.2085561497326207%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.266666666666666%'),
    top: hp('91.97860962566845%'),
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
