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
      <View style={styles.View_54_3949} />
      <View style={styles.View_54_3814}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I54_3814_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I54_3814_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I54_3814_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I54_3814_4_16}
        />
      </View>
      <View style={styles.View_54_3815} />
      <View style={styles.View_54_3818}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_54_3819}
        />
      </View>
      <View style={styles.View_54_3821}>
        <Text style={styles.Text_54_3821}>Shared</Text>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/576d/9346/068dfc1d97d785b18483a4e1bcbec68e',
        }}
        style={styles.ImageBackground_54_3822}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc6/a80e/7850fd240562b639ddda81192303d66f',
        }}
        style={styles.ImageBackground_54_3823}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341a/58bd/8b9577e51d6ceadae93c082427a3bb26',
        }}
        style={styles.ImageBackground_54_3824}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f90/1a16/7315022103974411da337a22a4f67c8d',
        }}
        style={styles.ImageBackground_54_3825}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbb/73a8/cccfe73b546a99c994c8e79fe21c9daa',
        }}
        style={styles.ImageBackground_54_3826}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9a/ca80/e4925e3af7818b216b3cfb56c2accd1e',
        }}
        style={styles.ImageBackground_54_3827}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0402/817d/4b8ff243e3bd240e16e68d7d0e9b27de',
        }}
        style={styles.ImageBackground_54_3828}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2593/20aa/8b52867bef9cd735a93de1e9599c54a5',
        }}
        style={styles.ImageBackground_54_3829}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c97/1e11/af41ca72660352d39b3d086614b9806b',
        }}
        style={styles.ImageBackground_54_3830}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e4d/1978/48c2fe70312aa4d6f2368abff319273b',
        }}
        style={styles.ImageBackground_54_3831}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a9/d59a/746ce4d60814fc611b7cc57384340dd6',
        }}
        style={styles.ImageBackground_54_3832}
      />
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b2d/aa03/bd7eaa17e61ae3559823cbc75c265718',
        }}
        style={styles.ImageBackground_54_3833}
      />
      <View style={styles.View_54_3834}>
        <View style={styles.View_54_3835} />
        <View style={styles.View_54_3836}>
          <Text style={styles.Text_54_3836}>Sample.pdf</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff2/9351/62fa3948abf14dafb7116e29d612edad',
          }}
          style={styles.ImageBackground_54_3837}
        />
      </View>
      <View style={styles.View_54_3840}>
        <View style={styles.View_54_3841} />
        <View style={styles.View_54_3842}>
          <Text style={styles.Text_54_3842}>Resume.pdf</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff2/9351/62fa3948abf14dafb7116e29d612edad',
          }}
          style={styles.ImageBackground_54_3843}
        />
      </View>
      <View style={styles.View_54_3846}>
        <View style={styles.View_54_3847} />
        <View style={styles.View_54_3848}>
          <Text style={styles.Text_54_3848}>Resume.pdf</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff2/9351/62fa3948abf14dafb7116e29d612edad',
          }}
          style={styles.ImageBackground_54_3849}
        />
      </View>
      <View style={styles.View_54_3852}>
        <View style={styles.View_54_3853} />
        <View style={styles.View_54_3854}>
          <Text style={styles.Text_54_3854}>Invoice.docx</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768e/9b28/712bffecf187ffeb4e9c7bd581beada7',
          }}
          style={styles.ImageBackground_54_3855}
        />
      </View>
      <View style={styles.View_54_3857}>
        <View style={styles.View_54_3858} />
        <View style={styles.View_54_3859}>
          <Text style={styles.Text_54_3859}>Invoice.docx</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768e/9b28/712bffecf187ffeb4e9c7bd581beada7',
          }}
          style={styles.ImageBackground_54_3860}
        />
      </View>
      <View style={styles.View_54_3862}>
        <View style={styles.View_54_3863} />
        <View style={styles.View_54_3864}>
          <Text style={styles.Text_54_3864}>Invoice.docx</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768e/9b28/712bffecf187ffeb4e9c7bd581beada7',
          }}
          style={styles.ImageBackground_54_3865}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_54_3875}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_3608'))
        }>
        <Text style={styles.Text_54_3875}>Download</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  View_54_3949: {
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
  View_54_3814: {
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
  ImageBackground_I54_3814_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I54_3814_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I54_3814_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I54_3814_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_54_3815: {
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
  View_54_3818: {
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
  ImageBackground_54_3819: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_54_3821: {
    width: wp('23.200000000000003%'),
    minWidth: wp('23.200000000000003%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.533333333333333%'),
    top: hp('8.94808743169399%'),
    justifyContent: 'flex-start',
  },
  Text_54_3821: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  ImageBackground_54_3822: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('44.740437158469945%'),
  },
  ImageBackground_54_3823: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('58.948087431693985%'),
  },
  ImageBackground_54_3824: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('73.15573770491804%'),
  },
  ImageBackground_54_3825: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('87.36338797814209%'),
  },
  ImageBackground_54_3826: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('44.740437158469945%'),
  },
  ImageBackground_54_3827: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('58.948087431693985%'),
  },
  ImageBackground_54_3828: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('73.15573770491804%'),
  },
  ImageBackground_54_3829: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('87.36338797814209%'),
  },
  ImageBackground_54_3830: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('44.740437158469945%'),
  },
  ImageBackground_54_3831: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('58.948087431693985%'),
  },
  ImageBackground_54_3832: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('73.15573770491804%'),
  },
  ImageBackground_54_3833: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('87.36338797814209%'),
  },
  View_54_3834: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('16.325136612021858%'),
  },
  View_54_3835: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3836: {
    width: wp('15.466666666666667%'),
    minWidth: wp('15.466666666666667%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.133333333333333%'),
    top: hp('9.83606557377049%'),
    justifyContent: 'flex-start',
  },
  Text_54_3836: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3837: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.2349726775956285%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('9.6%'),
  },
  View_54_3840: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('16.325136612021858%'),
  },
  View_54_3841: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3842: {
    width: wp('16.53333333333333%'),
    minWidth: wp('16.53333333333333%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.133333333333333%'),
    top: hp('9.83606557377049%'),
    justifyContent: 'flex-start',
  },
  Text_54_3842: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3843: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.2349726775956285%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('9.600000000000001%'),
  },
  View_54_3846: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('30.532786885245898%'),
  },
  View_54_3847: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3848: {
    width: wp('16.53333333333333%'),
    minWidth: wp('16.53333333333333%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.6000000000000085%'),
    top: hp('9.699453551912569%'),
    justifyContent: 'flex-start',
  },
  Text_54_3848: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3849: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.098360655737714%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('9.066666666666677%'),
  },
  View_54_3852: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('66.13333333333333%'),
    top: hp('16.325136612021858%'),
  },
  View_54_3853: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3854: {
    width: wp('16.8%'),
    minWidth: wp('16.8%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.6000000000000085%'),
    top: hp('9.83606557377049%'),
    justifyContent: 'flex-start',
  },
  Text_54_3854: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3855: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.2349726775956285%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('9.600000000000009%'),
  },
  View_54_3857: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('30.532786885245898%'),
  },
  View_54_3858: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3859: {
    width: wp('16.8%'),
    minWidth: wp('16.8%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.533333333333333%'),
    top: hp('9.699453551912569%'),
    justifyContent: 'flex-start',
  },
  Text_54_3859: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3860: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.098360655737714%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('8.533333333333335%'),
  },
  View_54_3862: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('36.266666666666666%'),
    top: hp('30.532786885245898%'),
  },
  View_54_3863: {
    width: wp('27.73333333333333%'),
    minWidth: wp('27.73333333333333%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_54_3864: {
    width: wp('16.8%'),
    minWidth: wp('16.8%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.916276041666663%'),
    top: hp('9.699453551912569%'),
    justifyContent: 'flex-start',
  },
  Text_54_3864: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3865: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('4.098360655737714%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('8.91627604166667%'),
  },
  TouchableOpacity_54_3875: {
    width: wp('19.733333333333334%'),
    minWidth: wp('19.733333333333334%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('74.38697916666666%'),
    top: hp('9.76775956284153%'),
    justifyContent: 'flex-start',
  },
  Text_54_3875: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
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
