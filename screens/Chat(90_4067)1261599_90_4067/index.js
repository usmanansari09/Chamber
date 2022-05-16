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
      <View style={styles.View_90_4108} />
      <TouchableOpacity
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a2/9636/8b0ae1ef6eaeb8d5eb8356af4ce62def',
        }}
        style={styles.TouchableOpacity_90_4068}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4130'))
        }
      />
      <View style={styles.View_90_4072}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I90_4072_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I90_4072_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I90_4072_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I90_4072_4_16}
        />
      </View>
      <View style={styles.View_90_4073} />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/414c/1be0/c0b3c57a754b318548251afefe838ec3',
        }}
        style={styles.ImageBackground_90_4074}
      />
      <View style={styles.View_90_4115}>
        <Text style={styles.Text_90_4115}>BC</Text>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8b/259a/4ce3fd993a31649c18290a5250321658',
        }}
        style={styles.ImageBackground_90_4075}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8b/259a/4ce3fd993a31649c18290a5250321658',
        }}
        style={styles.ImageBackground_90_4120}
      />
      <View style={styles.View_90_4077}>
        <Text style={styles.Text_90_4077}>Business conversations</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4080}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_560'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_90_4081}
        />
      </TouchableOpacity>
      <View style={styles.View_90_4083}>
        <View style={styles.View_90_4084}>
          <Text style={styles.Text_90_4084}>
            I want to talk about the invest i made today on Tesla company. I
            have invested $10,000.
          </Text>
        </View>
      </View>
      <View style={styles.View_90_4121}>
        <View style={styles.View_90_4122}>
          <Text style={styles.Text_90_4122}>
            it’s simple siearra. all you have to do is open account on the this
            link. www.invest.com. Here you can read the detail process on this
            doc
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4125}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('109_3870'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f410/048a/e3a4d5f6b33102566d68ac8f9c154695',
          }}
          style={styles.ImageBackground_90_4127}
        />
        <View style={styles.View_90_4129}>
          <Text style={styles.Text_90_4129}>
            attachment: Invest process.pdf
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_90_4085}>
        <View style={styles.View_90_4086}>
          <Text style={styles.Text_90_4086}>
            Hey John, I want to make an investment. Can you help me with it?
          </Text>
        </View>
      </View>
      <View style={styles.View_90_4089}>
        <View style={styles.View_90_4090}>
          <Text style={styles.Text_90_4090}>
            Oh you made an investment? that’s Great
          </Text>
        </View>
      </View>
      <View style={styles.View_90_4091}>
        <View style={styles.View_90_4092}>
          <Text style={styles.Text_90_4092}>
            Nice guide about the investment. I think I will invest as well.
          </Text>
        </View>
      </View>
      <View style={styles.View_90_4093}>
        <Text style={styles.Text_90_4093}>Today</Text>
      </View>
      <View style={styles.View_90_4094}>
        <Text style={styles.Text_90_4094}>2:13 PM</Text>
      </View>
      <View style={styles.View_90_4123}>
        <Text style={styles.Text_90_4123}>2:13 PM</Text>
      </View>
      <View style={styles.View_90_4117}>
        <Text style={styles.Text_90_4117}>John Doe</Text>
      </View>
      <View style={styles.View_90_4124}>
        <Text style={styles.Text_90_4124}>John Doe</Text>
      </View>
      <View style={styles.View_90_4118}>
        <Text style={styles.Text_90_4118}>Sierra Fox</Text>
      </View>
      <View style={styles.View_90_4095}>
        <Text style={styles.Text_90_4095}>3:03 PM</Text>
      </View>
      <View style={styles.View_90_4096}>
        <Text style={styles.Text_90_4096}>2:13 PM</Text>
      </View>
      <View style={styles.View_90_4097}>
        <Text style={styles.Text_90_4097}>3:30 PM</Text>
      </View>
      <View style={styles.View_90_4098}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5594/03a7/138815e397f64d9a3a98efe19e4c3c51',
          }}
          style={styles.ImageBackground_90_4099}
        />
        <View style={styles.View_90_4101}>
          <Text style={styles.Text_90_4101}>Message..</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f410/048a/e3a4d5f6b33102566d68ac8f9c154695',
        }}
        style={styles.ImageBackground_90_4102}
      />
      <View style={styles.View_90_4104}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9976/3c2c/6cbbd12923118b9158f87d7ccf926789',
          }}
          style={styles.ImageBackground_90_4105}
        />
      </View>
      <View style={styles.View_90_4107}>
        <Text style={styles.Text_90_4107}>
          Messages will be deleted after 7 days
        </Text>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8904/7c07/a68e455171bc6cb8cf81f3f69673dd92',
        }}
        style={styles.ImageBackground_90_4119}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  View_90_4108: {
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
  TouchableOpacity_90_4068: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('8.743169398907105%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('87.3696533203125%'),
  },
  View_90_4072: {
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
  ImageBackground_I90_4072_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I90_4072_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I90_4072_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I90_4072_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_90_4073: {
    width: wp('35.46666666666667%'),
    height: hp('0.819672131147541%'),
    minHeight: hp('0.819672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.266666666666666%'),
    top: hp('109.12225441854508%'),
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  ImageBackground_90_4074: {
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
  View_90_4115: {
    width: wp('5.6000000000000005%'),
    minWidth: wp('5.6000000000000005%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.4%'),
    top: hp('9.653693860997267%'),
    justifyContent: 'flex-start',
  },
  Text_90_4115: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_90_4075: {
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
  ImageBackground_90_4120: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
    top: hp('61.70567580259563%'),
  },
  View_90_4077: {
    width: wp('56.8%'),
    minWidth: wp('56.8%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('21.6%'),
    top: hp('9.426229508196721%'),
    justifyContent: 'flex-start',
  },
  Text_90_4077: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  TouchableOpacity_90_4080: {
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
  ImageBackground_90_4081: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_90_4083: {
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
  View_90_4084: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('6.967213114754098%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479164%'),
    top: hp('0.8404841188524586%'),
    justifyContent: 'flex-start',
  },
  Text_90_4084: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_90_4121: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('11.475409836065573%'),
    minHeight: hp('11.475409836065573%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('57.377049180327866%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  View_90_4122: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('9.289617486338798%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461523437499999%'),
    top: hp('0.8404841188524586%'),
    justifyContent: 'flex-start',
  },
  Text_90_4122: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  TouchableOpacity_90_4125: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('3.825136612021858%'),
    minHeight: hp('3.825136612021858%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('69.39890710382514%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  ImageBackground_90_4127: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('0.2732240437158424%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.333333333333334%'),
  },
  View_90_4129: {
    width: wp('54.31148681640625%'),
    minWidth: wp('54.31148681640625%'),
    minHeight: hp('2.0961894363653464%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('10.670247395833332%'),
    top: hp('0.6101514472336049%'),
    justifyContent: 'flex-start',
  },
  Text_90_4129: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_90_4085: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('44.80874316939891%'),
    backgroundColor: 'rgba(0, 0, 0, 0.11999999731779099)',
    overflow: 'hidden',
  },
  View_90_4086: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('4.644808743169399%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461523437499999%'),
    top: hp('0.8404841188524586%'),
    justifyContent: 'flex-start',
  },
  Text_90_4086: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_90_4089: {
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
  View_90_4090: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('4.644808743169399%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479167%'),
    top: hp('0.8404841188524657%'),
    justifyContent: 'flex-start',
  },
  Text_90_4090: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_90_4091: {
    width: wp('70.39999999999999%'),
    minWidth: wp('70.39999999999999%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('25.866666666666667%'),
    top: hp('77.59562841530054%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4092: {
    width: wp('61.45508626302083%'),
    minWidth: wp('61.45508626302083%'),
    minHeight: hp('4.644808743169399%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.461515299479167%'),
    top: hp('0.8404841188524586%'),
    justifyContent: 'flex-start',
  },
  Text_90_4092: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_90_4093: {
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
  Text_90_4093: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4094: {
    width: wp('9.866666666666667%'),
    minWidth: wp('9.866666666666667%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('28.880301720457652%'),
    justifyContent: 'flex-start',
  },
  Text_90_4094: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4123: {
    width: wp('9.866666666666667%'),
    minWidth: wp('9.866666666666667%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('73.77049180327869%'),
    justifyContent: 'flex-start',
  },
  Text_90_4123: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4117: {
    width: wp('12.8%'),
    minWidth: wp('12.8%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('17.48633879781421%'),
    justifyContent: 'flex-start',
  },
  Text_90_4117: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4124: {
    width: wp('12.8%'),
    minWidth: wp('12.8%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('55.148298753415304%'),
    justifyContent: 'flex-start',
  },
  Text_90_4124: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4118: {
    width: wp('13.066666666666665%'),
    minWidth: wp('13.066666666666665%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('42.62295081967213%'),
    justifyContent: 'flex-start',
  },
  Text_90_4118: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4095: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.8%'),
    top: hp('51.84426229508197%'),
    justifyContent: 'flex-start',
  },
  Text_90_4095: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4096: {
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
  Text_90_4096: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4097: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('1.639344262295082%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('85.6%'),
    top: hp('84.69945355191257%'),
    justifyContent: 'flex-start',
  },
  Text_90_4097: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  View_90_4098: {
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
  ImageBackground_90_4099: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.092896174863398%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('68.26666666666665%'),
  },
  View_90_4101: {
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
  Text_90_4101: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_90_4102: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('103.82513661202186%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.86666666666666%'),
  },
  View_90_4104: {
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
  ImageBackground_90_4105: {
    width: wp('6.4%'),
    height: hp('2.8688524590163933%'),
    top: hp('0.20491803278687826%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.0008015950520814386%'),
  },
  View_90_4107: {
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
  Text_90_4107: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_90_4119: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('44.80874316939891%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.1333333333333333%'),
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
