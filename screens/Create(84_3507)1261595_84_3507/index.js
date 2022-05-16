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
      <TouchableOpacity
        style={styles.TouchableOpacity_84_3641}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('84_3676'))
        }>
        <View style={styles.View_84_3642}>
          <Text style={styles.Text_84_3642}>Add New Group</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b223/fa26/722586744f855785f61e0326a710fa4b',
          }}
          style={styles.ImageBackground_84_3643}
        />
      </TouchableOpacity>
      <View style={styles.View_84_3524}>
        <View style={styles.View_84_3525}>
          <Text style={styles.Text_84_3525}>Create</Text>
        </View>
      </View>
      <View style={styles.View_84_3527}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I84_3527_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I84_3527_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I84_3527_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ec9/d1a9/26e3d3c84389bc4553d81f36e8c06405',
          }}
          style={styles.ImageBackground_I84_3527_4_16}
        />
      </View>
      <View style={styles.View_84_3528}>
        <View style={styles.View_I84_3528_37_4199}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I84_3528_54_3511}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen('29_560'))
            }>
            <ImageBackground
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a02b/320a/3baff7acbabed2c3b175f048d5da74b3',
              }}
              style={styles.ImageBackground_I84_3528_29_589}
            />
            <View style={styles.View_I84_3528_29_603}>
              <Text style={styles.Text_I84_3528_29_603}>Chats</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I84_3528_54_3523}>
            <View style={styles.View_I84_3528_37_4186}>
              <ImageBackground
                source={{
                  uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a41/639e/5a72ee906fda24de82d2ea52f65d7057',
                }}
                style={styles.ImageBackground_I84_3528_37_4187}
              />
            </View>
            <View style={styles.View_I84_3528_37_4189}>
              <Text style={styles.Text_I84_3528_37_4189}>Create</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I84_3528_29_568} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  TouchableOpacity_84_3641: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.266666666666667%'),
    top: hp('17.48633879781421%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_84_3642: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208333%'),
    top: hp('1.8460633324795062%'),
    justifyContent: 'flex-start',
  },
  Text_84_3642: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_84_3643: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.742737149931692%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333334%'),
  },
  View_84_3524: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('8.19672131147541%'),
    minHeight: hp('8.19672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('6.0109289617486334%'),
    backgroundColor: 'rgba(237, 237, 237, 1)',
    overflow: 'hidden',
  },
  View_84_3525: {
    width: wp('21.866666666666667%'),
    minWidth: wp('21.866666666666667%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471354166666667%'),
    top: hp('2.390843792691256%'),
    justifyContent: 'flex-start',
  },
  Text_84_3525: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  View_84_3527: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('6.0109289617486334%'),
    minHeight: hp('6.0109289617486334%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(237, 237, 237, 1)',
  },
  ImageBackground_I84_3527_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I84_3527_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I84_3527_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I84_3527_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_84_3528: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('12.704918032786885%'),
    minHeight: hp('12.704918032786885%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('98.29181608606558%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_I84_3528_37_4199: {
    flexGrow: 1,
    width: wp('53.854427083333334%'),
    height: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('23.072786458333333%'),
    top: hp('1.9238414660177483%'),
  },
  TouchableOpacity_I84_3528_54_3511: {
    width: wp('9.333333333333334%'),
    minWidth: wp('9.333333333333334%'),
    height: hp('6.830601092896176%'),
    minHeight: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3528_29_589: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.40000000000000213%'),
  },
  View_I84_3528_29_603: {
    width: wp('9.333333333333334%'),
    minWidth: wp('9.333333333333334%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('4.78142076502732%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3528_29_603: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  View_I84_3528_54_3523: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    height: hp('6.830601092896176%'),
    minHeight: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('43.18776041666667%'),
    top: hp('0%'),
  },
  View_I84_3528_37_4186: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.0666666666666629%'),
    top: hp('0%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_I84_3528_37_4187: {
    width: wp('5.973333740234375%'),
    height: hp('3.0601094980708887%'),
    top: hp('0.6557110228825138%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.27999674479166%'),
  },
  View_I84_3528_37_4189: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('4.78142076502732%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3528_37_4189: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  View_I84_3528_29_568: {
    flexGrow: 1,
    width: wp('35.46666666666667%'),
    height: hp('0.819672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.33798828125%'),
    top: hp('10.83384029200819%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
