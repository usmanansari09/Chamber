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
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a2/9636/8b0ae1ef6eaeb8d5eb8356af4ce62def',
        }}
        style={styles.TouchableOpacity_29_689}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('37_540'))
        }
      />
      <View style={styles.View_29_652}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I29_652_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I29_652_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I29_652_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I29_652_4_16}
        />
      </View>
      <View style={styles.View_29_653} />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8b/259a/4ce3fd993a31649c18290a5250321658',
        }}
        style={styles.ImageBackground_29_654}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8b/259a/4ce3fd993a31649c18290a5250321658',
        }}
        style={styles.ImageBackground_37_505}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8b/259a/4ce3fd993a31649c18290a5250321658',
        }}
        style={styles.ImageBackground_37_520}
      />
      <View style={styles.View_29_659}>
        <Text style={styles.Text_29_659}>John Doe</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_29_693}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_560'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_29_694}
        />
      </TouchableOpacity>
      <View style={styles.View_37_503}>
        <View style={styles.View_37_508}>
          <Text style={styles.Text_37_508}>
            How do you corect someone who’s been spelling your name repeatedely
            wrong via email?
          </Text>
        </View>
      </View>
      <View style={styles.View_37_517}>
        <View style={styles.View_37_518}>
          <Text style={styles.Text_37_518}>
            Look at my laptop. Isn’t it pretty?
          </Text>
        </View>
      </View>
      <View style={styles.View_37_515}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e08d/9e4a/a385f75478c9f09c270e983990ff2f1e',
          }}
          style={styles.ImageBackground_37_519}
        />
      </View>
      <View style={styles.View_37_511}>
        <View style={styles.View_37_512}>
          <Text style={styles.Text_37_512}>
            Yes exactly, I had a similar issue for the logest time
          </Text>
        </View>
      </View>
      <View style={styles.View_37_524}>
        <View style={styles.View_37_525}>
          <Text style={styles.Text_37_525}>
            Wow, What model is that. I want to buy it too
          </Text>
        </View>
      </View>
      <View style={styles.View_37_506}>
        <Text style={styles.Text_37_506}>Today</Text>
      </View>
      <View style={styles.View_37_509}>
        <Text style={styles.Text_37_509}>2:13 PM</Text>
      </View>
      <View style={styles.View_37_523}>
        <Text style={styles.Text_37_523}>3:03 PM</Text>
      </View>
      <View style={styles.View_37_514}>
        <Text style={styles.Text_37_514}>2:13 PM</Text>
      </View>
      <View style={styles.View_37_526}>
        <Text style={styles.Text_37_526}>3:30 PM</Text>
      </View>
      <View style={styles.View_37_527}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5594/03a7/138815e397f64d9a3a98efe19e4c3c51',
          }}
          style={styles.ImageBackground_37_538}
        />
        <View style={styles.View_37_528}>
          <Text style={styles.Text_37_528}>Message..</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f410/048a/e3a4d5f6b33102566d68ac8f9c154695',
        }}
        style={styles.ImageBackground_37_534}
      />
      <View style={styles.View_37_531}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9976/3c2c/6cbbd12923118b9158f87d7ccf926789',
          }}
          style={styles.ImageBackground_37_532}
        />
      </View>
      <View style={styles.View_54_3878}>
        <Text style={styles.Text_54_3878}>
          Messages will be deleted after 7 days
        </Text>
      </View>
      <View style={styles.View_54_3946} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  TouchableOpacity_29_689: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('8.743169398907105%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('87.3696533203125%'),
  },
  View_29_652: {
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
  ImageBackground_I29_652_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I29_652_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I29_652_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I29_652_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_29_653: {
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
  ImageBackground_29_654: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('10.933333333333334%'),
    top: hp('8.743169398907105%'),
  },
  ImageBackground_37_505: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('24.043715846994534%'),
  },
  ImageBackground_37_520: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('66.66666666666666%'),
  },
  View_29_659: {
    width: wp('23.466666666666665%'),
    minWidth: wp('23.466666666666665%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('21.6%'),
    top: hp('9.426229508196721%'),
    justifyContent: 'flex-start',
  },
  Text_29_659: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  TouchableOpacity_29_693: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.4%'),
    top: hp('8.743169398907105%'),
  },
  ImageBackground_29_694: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_37_503: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('8.743169398907105%'),
    minHeight: hp('8.743169398907105%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('19.672131147540984%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  View_37_508: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('6.967213114754098%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479164%'),
    top: hp('0.840467442580259%'),
    justifyContent: 'flex-start',
  },
  Text_37_508: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_37_517: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('66.66666666666666%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  View_37_518: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461523437499999%'),
    top: hp('0.8404674425802625%'),
    justifyContent: 'flex-start',
  },
  Text_37_518: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_37_515: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('21.85792349726776%'),
    minHeight: hp('21.85792349726776%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('43.71584699453552%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  ImageBackground_37_519: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('21.85792349726776%'),
    minHeight: hp('21.85792349726776%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_37_511: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('25.866666666666667%'),
    top: hp('32.78688524590164%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_37_512: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('4.644808743169399%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479167%'),
    top: hp('0.8404674425802625%'),
    justifyContent: 'flex-start',
  },
  Text_37_512: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_37_524: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('25.866666666666667%'),
    top: hp('75.40983606557377%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_37_525: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('4.644808743169399%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479167%'),
    top: hp('0.8404674425802625%'),
    justifyContent: 'flex-start',
  },
  Text_37_525: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_37_506: {
    width: wp('11.200000000000001%'),
    minWidth: wp('11.200000000000001%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('42.8%'),
    top: hp('15.300546448087433%'),
    justifyContent: 'flex-start',
  },
  Text_37_506: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_37_509: {
    width: wp('9.866666666666667%'),
    minWidth: wp('9.866666666666667%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('28.88028504418545%'),
    justifyContent: 'flex-start',
  },
  Text_37_509: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_37_523: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('71.58469945355192%'),
    justifyContent: 'flex-start',
  },
  Text_37_523: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_37_514: {
    width: wp('9.866666666666667%'),
    minWidth: wp('9.866666666666667%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('86.4%'),
    top: hp('39.89071038251366%'),
    justifyContent: 'flex-start',
  },
  Text_37_514: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_37_526: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('85.6%'),
    top: hp('82.5136612021858%'),
    justifyContent: 'flex-start',
  },
  Text_37_526: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_37_527: {
    width: wp('76.8%'),
    minWidth: wp('76.8%'),
    height: hp('5.46448087431694%'),
    minHeight: hp('5.46448087431694%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('102.73224043715847%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_37_538: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.092896174863398%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('68.26666666666665%'),
  },
  View_37_528: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.514534505208333%'),
    top: hp('1.5710382513661187%'),
    justifyContent: 'flex-start',
  },
  Text_37_528: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_37_534: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('103.82513661202186%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.86666666666666%'),
  },
  View_37_531: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.33333333333333%'),
    top: hp('103.82513661202186%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_37_532: {
    width: wp('6.4%'),
    height: hp('2.8688524590163933%'),
    top: hp('0.20491803278687826%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.0007995605468806843%'),
  },
  View_54_3878: {
    width: wp('68.8%'),
    minWidth: wp('68.8%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.266666666666667%'),
    top: hp('99.31693989071039%'),
    justifyContent: 'flex-start',
  },
  Text_54_3878: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_54_3946: {
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
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
