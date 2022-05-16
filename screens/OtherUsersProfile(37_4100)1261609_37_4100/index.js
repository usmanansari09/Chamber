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
      <View style={styles.View_37_4102} />
      <View style={styles.View_37_4184}>
        <View style={styles.View_37_4101}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
            }}
            style={styles.ImageBackground_I37_4101_4_11}
          />
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
            }}
            style={styles.ImageBackground_I37_4101_4_12}
          />
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
            }}
            style={styles.ImageBackground_I37_4101_4_14}
          />
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
            }}
            style={styles.ImageBackground_I37_4101_4_16}
          />
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc18/f5ca/f9f344717a5ecf62c189c766d477456b',
          }}
          style={styles.ImageBackground_37_4103}
        />
        <View style={styles.View_37_4104}>
          <Text style={styles.Text_37_4104}>John Doe</Text>
        </View>
        <View style={styles.View_37_4143}>
          <Text style={styles.Text_37_4143}>+977-9841232425</Text>
        </View>
        <View style={styles.View_37_4107}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
            }}
            style={styles.ImageBackground_37_4108}
          />
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442e/9cc0/8e004cd4396e94cb5558958811a63f4e',
          }}
          style={styles.ImageBackground_37_4146}
        />
        <View style={styles.View_37_4185}>
          <Text style={styles.Text_37_4185}>Talking about investments</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cc2/ee30/ca3619a1a81dc64fc97ce5e664a68863',
          }}
          style={styles.ImageBackground_57_3554}
        />
      </View>
      <View style={styles.View_54_3886}>
        <Text style={styles.Text_54_3886}>Other User’s Profile</Text>
      </View>
      <View style={styles.View_57_3544}>
        <View style={styles.View_57_3548}>
          <Text style={styles.Text_57_3548}>Message</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b223/fa26/722586744f855785f61e0326a710fa4b',
          }}
          style={styles.ImageBackground_57_3552}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  View_37_4102: {
    width: wp('35.46666666666667%'),
    height: hp('0.819672131147541%'),
    minHeight: hp('0.819672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.266666666666666%'),
    top: hp('109.1222710948173%'),
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  View_37_4184: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('46.994535519125684%'),
    minHeight: hp('46.994535519125684%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(33, 33, 33, 0.07999999821186066)',
    overflow: 'hidden',
  },
  View_37_4101: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('6.0109289617486334%'),
    minHeight: hp('6.0109289617486334%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  ImageBackground_I37_4101_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I37_4101_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I37_4101_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I37_4101_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_37_4103: {
    width: wp('25.6%'),
    minWidth: wp('25.6%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('37.2%'),
    top: hp('15.846994535519126%'),
  },
  View_37_4104: {
    width: wp('31.2%'),
    minWidth: wp('31.2%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('34.266666666666666%'),
    top: hp('30.05464480874317%'),
    justifyContent: 'flex-start',
  },
  Text_37_4104: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  View_37_4143: {
    width: wp('41.06666666666667%'),
    minWidth: wp('41.06666666666667%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('29.2%'),
    top: hp('35.10928961748634%'),
    justifyContent: 'flex-start',
  },
  Text_37_4143: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_37_4107: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.6080729166666665%'),
    top: hp('8.743169398907105%'),
  },
  ImageBackground_37_4108: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  ImageBackground_37_4146: {
    width: wp('4.266666666666667%'),
    minWidth: wp('4.266666666666667%'),
    height: hp('2.185792349726776%'),
    minHeight: hp('2.185792349726776%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('54.737109375%'),
    top: hp('26.775956284153008%'),
  },
  View_37_4185: {
    width: wp('49.86666666666667%'),
    minWidth: wp('49.86666666666667%'),
    minHeight: hp('1.912568306010929%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.2%'),
    top: hp('42.21311475409836%'),
    justifyContent: 'flex-start',
  },
  Text_37_4185: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_57_3554: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('41.53005464480874%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('8.665104166666666%'),
  },
  View_54_3886: {
    width: wp('64.8%'),
    minWidth: wp('64.8%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.833333333333332%'),
    top: hp('8.743169398907105%'),
    justifyContent: 'flex-start',
  },
  Text_54_3886: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  View_57_3544: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.266666666666667%'),
    top: hp('49.18032786885246%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_57_3548: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401660156250003%'),
    top: hp('1.846096685023909%'),
    justifyContent: 'flex-start',
  },
  Text_57_3548: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_57_3552: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.742720473659496%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333334%'),
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
