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
      <View style={styles.View_54_3945} />
      <View style={styles.View_37_545}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I37_545_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I37_545_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I37_545_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I37_545_4_16}
        />
      </View>
      <View style={styles.View_37_546} />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc18/f5ca/f9f344717a5ecf62c189c766d477456b',
        }}
        style={styles.ImageBackground_37_547}
      />
      <View style={styles.View_37_550}>
        <Text style={styles.Text_37_550}>John Doe</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_37_553}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_650'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_37_554}
        />
      </TouchableOpacity>
      <View style={styles.View_37_587}>
        <Text style={styles.Text_37_587}>More Actions</Text>
      </View>
      <View style={styles.View_37_598}>
        <Text style={styles.Text_37_598}>Privacy and support</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_37_594}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_3608'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e6/1917/4fd3d86cbc806782ba66d2e9e3fe1b78',
          }}
          style={styles.ImageBackground_37_589}
        />
        <View style={styles.View_37_588}>
          <Text style={styles.Text_37_588}>View Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e0/8886/a9dc91376ed12da04d74406006613012',
          }}
          style={styles.ImageBackground_37_596}
        />
      </TouchableOpacity>
      <View style={styles.View_37_607}>
        <View style={styles.View_37_617}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0317/575c/b1fecf2bd8fdc51a5b8e5779dd715d37',
            }}
            style={styles.ImageBackground_37_618}
          />
        </View>
        <View style={styles.View_37_613}>
          <Text style={styles.Text_37_613}>Block</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_37_620}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('37_632'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bef/c6d1/b21cca69b4b49518d7f0d8a2d7930bd3',
          }}
          style={styles.ImageBackground_37_628}
        />
        <View style={styles.View_37_624}>
          <Text style={styles.Text_37_624}>Report</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442e/9cc0/8e004cd4396e94cb5558958811a63f4e',
        }}
        style={styles.ImageBackground_37_4145}
      />
      <View style={styles.View_54_3879}>
        <Text style={styles.Text_54_3879}>Details</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  View_54_3945: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('14.207650273224044%'),
    minHeight: hp('14.207650273224044%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(33, 33, 33, 1)',
    opacity: 0.07999999821186066,
  },
  View_37_545: {
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
  ImageBackground_I37_545_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I37_545_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I37_545_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I37_545_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_37_546: {
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
  ImageBackground_37_547: {
    width: wp('25.6%'),
    minWidth: wp('25.6%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('37.2%'),
    top: hp('15.300546448087433%'),
  },
  View_37_550: {
    width: wp('31.2%'),
    minWidth: wp('31.2%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('34.266666666666666%'),
    top: hp('30.601092896174865%'),
    justifyContent: 'flex-start',
  },
  Text_37_550: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  TouchableOpacity_37_553: {
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
  ImageBackground_37_554: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_37_587: {
    width: wp('31.733333333333334%'),
    minWidth: wp('31.733333333333334%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.608072916666667%'),
    top: hp('38.3879781420765%'),
    justifyContent: 'flex-start',
  },
  Text_37_587: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  View_37_598: {
    width: wp('52.18724772135417%'),
    minWidth: wp('52.18724772135417%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.608072916666667%'),
    top: hp('50.409836065573764%'),
    justifyContent: 'flex-start',
  },
  Text_37_598: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  TouchableOpacity_37_594: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('41.53005464480874%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_37_589: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
  },
  View_37_588: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.846096685023909%'),
    justifyContent: 'flex-start',
  },
  Text_37_588: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_37_596: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('79.19999999999999%'),
  },
  View_37_607: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('53.551912568306015%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_37_617: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
    top: hp('1.6393442622950758%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_37_618: {
    width: wp('5.333333333333334%'),
    height: hp('2.73224043715847%'),
    top: hp('0.27335745389344623%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.533333333333335%'),
  },
  View_37_613: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460966850239018%'),
    justifyContent: 'flex-start',
  },
  Text_37_613: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  TouchableOpacity_37_620: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('61.20218579234973%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_37_628: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
  },
  View_37_624: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460966850239018%'),
    justifyContent: 'flex-start',
  },
  Text_37_624: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_37_4145: {
    width: wp('4.266666666666667%'),
    minWidth: wp('4.266666666666667%'),
    height: hp('2.185792349726776%'),
    minHeight: hp('2.185792349726776%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('54.528645833333336%'),
    top: hp('26.229508196721312%'),
  },
  View_54_3879: {
    width: wp('22.933333333333334%'),
    minWidth: wp('22.933333333333334%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.833333333333332%'),
    top: hp('8.743169398907105%'),
    justifyContent: 'flex-start',
  },
  Text_54_3879: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
