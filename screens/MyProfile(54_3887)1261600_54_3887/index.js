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
      <View style={styles.View_54_3950} />
      <View style={styles.View_54_3972} />
      <View style={styles.View_54_3892}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I54_3892_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I54_3892_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I54_3892_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ec9/d1a9/26e3d3c84389bc4553d81f36e8c06405',
          }}
          style={styles.ImageBackground_I54_3892_4_16}
        />
      </View>
      <View style={styles.View_54_3893} />
      <TouchableOpacity
        style={styles.TouchableOpacity_54_3900}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_560'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_54_3901}
        />
      </TouchableOpacity>
      <View style={styles.View_54_3934}>
        <Text style={styles.Text_54_3934}>You</Text>
      </View>
      <TouchableOpacity
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa8/cb91/bf75d77c84eb51edd3ed770bb4fbc8ff',
        }}
        style={styles.TouchableOpacity_54_3935}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_4007'))
        }
      />
      <View style={styles.View_54_3936}>
        <Text style={styles.Text_54_3936}>Bikesh Shrestha</Text>
      </View>
      <View style={styles.View_54_3938}>
        <Text style={styles.Text_54_3938}>Active</Text>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86a0/d58b/071e5abf78851eecc121b998944fb5c4',
        }}
        style={styles.ImageBackground_54_3939}
      />
      <View style={styles.View_54_3957}>
        <View style={styles.View_54_3961}>
          <Text style={styles.Text_54_3961}>+977-9841232425</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b2f/d2fd/03d4fc1e1ec915d8e29e5155eebc50a3',
          }}
          style={styles.ImageBackground_54_3963}
        />
      </View>
      <View style={styles.View_54_3973}>
        <View style={styles.View_54_3998}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b63d/85fa/ba1d76453a52d7a763ce19f7fe42bb69',
            }}
            style={styles.ImageBackground_54_3999}
          />
        </View>
        <View style={styles.View_54_3977}>
          <Text style={styles.Text_54_3977}>Terms &amp; Conditions</Text>
        </View>
      </View>
      <View style={styles.View_54_3978}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b10a/ca3f/e9de6cc1d78ea50c68c3cd9d1bb7ad15',
          }}
          style={styles.ImageBackground_54_4002}
        />
        <View style={styles.View_54_3982}>
          <Text style={styles.Text_54_3982}>Privacy Policy</Text>
        </View>
      </View>
      <View style={styles.View_54_3983}>
        <View style={styles.View_54_4004}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feca/060d/1cf0257b2fffa15b4e0e97bc85f19439',
            }}
            style={styles.ImageBackground_54_4005}
          />
        </View>
        <View style={styles.View_54_3987}>
          <Text style={styles.Text_54_3987}>About</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_54_3988}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_4182'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/518b/4174/360d67df76923de5f2cd35f50d310176',
          }}
          style={styles.ImageBackground_54_3996}
        />
        <View style={styles.View_54_3992}>
          <Text style={styles.Text_54_3992}>Logout</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('110.92896174863387%')},
  View_54_3950: {
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
  View_54_3972: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('0.273224043715847%'),
    minHeight: hp('0.273224043715847%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('35.12636612021858%'),
    backgroundColor: 'rgba(33, 33, 33, 1)',
    opacity: 0.07999999821186066,
  },
  View_54_3892: {
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
  ImageBackground_I54_3892_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I54_3892_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I54_3892_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I54_3892_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  View_54_3893: {
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
  TouchableOpacity_54_3900: {
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
  ImageBackground_54_3901: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_54_3934: {
    width: wp('12.533333333333333%'),
    minWidth: wp('12.533333333333333%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.833333333333332%'),
    top: hp('8.743169398907105%'),
    justifyContent: 'flex-start',
  },
  Text_54_3934: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  TouchableOpacity_54_3935: {
    width: wp('17.066666666666666%'),
    minWidth: wp('17.066666666666666%'),
    height: hp('8.743169398907105%'),
    minHeight: hp('8.743169398907105%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471354166666667%'),
    top: hp('16.4275956284153%'),
  },
  View_54_3936: {
    width: wp('39.46666666666667%'),
    minWidth: wp('39.46666666666667%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('26.666666666666668%'),
    top: hp('18.135245901639344%'),
    justifyContent: 'flex-start',
  },
  Text_54_3936: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_54_3938: {
    width: wp('12%'),
    minWidth: wp('12%'),
    minHeight: hp('2.3224043715846996%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('26.666666666666668%'),
    top: hp('21.14071038251366%'),
    justifyContent: 'flex-start',
  },
  Text_54_3938: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_54_3939: {
    width: wp('2.4380953470865885%'),
    minWidth: wp('2.4380953470865885%'),
    height: hp('1.2490242556796047%'),
    minHeight: hp('1.2490242556796047%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.466015625%'),
    top: hp('23.921712239583336%'),
  },
  View_54_3957: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.666666666666667%'),
    top: hp('26.349043715846992%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_54_3961: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208333%'),
    top: hp('1.8460633324795097%'),
    justifyContent: 'flex-start',
  },
  Text_54_3961: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_54_3963: {
    width: wp('5.101262919108073%'),
    height: hp('2.612298433897925%'),
    top: hp('1.8928903048155767%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.383984375%'),
  },
  View_54_3973: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('37.44877049180328%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_54_3998: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
    top: hp('1.4191507641735015%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_54_3999: {
    width: wp('3.733333333333334%'),
    height: hp('2.5956284153005464%'),
    top: hp('0.34153005464479946%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.333333333333334%'),
  },
  View_54_3977: {
    width: wp('61.136486816406254%'),
    minWidth: wp('61.136486816406254%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460633324795097%'),
    justifyContent: 'flex-start',
  },
  Text_54_3977: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_54_3978: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('45.099043715846996%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_54_4002: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
  },
  View_54_3982: {
    width: wp('61.136486816406254%'),
    minWidth: wp('61.136486816406254%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460633324795026%'),
    justifyContent: 'flex-start',
  },
  Text_54_3982: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  View_54_3983: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('52.74931693989071%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_54_4004: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
    top: hp('1.502798945525953%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_54_4005: {
    width: wp('5.866666666666666%'),
    height: hp('3.0054644808743167%'),
    top: hp('0.1366120218579283%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.2666666666666675%'),
  },
  View_54_3987: {
    width: wp('61.136486816406254%'),
    minWidth: wp('61.136486816406254%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460633324795097%'),
    justifyContent: 'flex-start',
  },
  Text_54_3987: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  TouchableOpacity_54_3988: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('95.08196721311475%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_54_3996: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.912701716188522%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
  },
  View_54_3992: {
    width: wp('61.136486816406254%'),
    minWidth: wp('61.136486816406254%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460633324795026%'),
    justifyContent: 'flex-start',
  },
  Text_54_3992: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
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
