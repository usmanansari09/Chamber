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
      <View style={styles.View_90_4261}>
        <Text style={styles.Text_90_4261}>Members</Text>
      </View>
      <View style={styles.View_90_4262}>
        <View style={styles.View_I90_4262_90_4293}>
          <Text style={styles.Text_I90_4262_90_4293}>Sierra Fox</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f2/c128/86608dfcb9a749668a9a364b5c5a16bc',
          }}
          style={styles.ImageBackground_I90_4262_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4262_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4262_90_4297}
        />
      </View>
      <View style={styles.View_90_4263}>
        <View style={styles.View_I90_4263_90_4293}>
          <Text style={styles.Text_I90_4263_90_4293}>Michelle Kidman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c7/9ba7/3d57097b2c0f3a133a9c1746d112642a',
          }}
          style={styles.ImageBackground_I90_4263_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4263_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4263_90_4297}
        />
      </View>
      <View style={styles.View_90_4264}>
        <View style={styles.View_I90_4264_90_4293}>
          <Text style={styles.Text_I90_4264_90_4293}>Taylor Swift</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c22/7f07/c44ee330d0fdf9c3b2188408e6119213',
          }}
          style={styles.ImageBackground_I90_4264_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4264_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4264_90_4297}
        />
      </View>
      <View style={styles.View_90_4265}>
        <View style={styles.View_I90_4265_90_4293}>
          <Text style={styles.Text_I90_4265_90_4293}>Tracy Chapman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5206/c0f6/70cf9cfc495a8c002cd5acb75d51faa0',
          }}
          style={styles.ImageBackground_I90_4265_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4265_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4265_90_4297}
        />
      </View>
      <View style={styles.View_90_4266}>
        <View style={styles.View_I90_4266_90_4293}>
          <Text style={styles.Text_I90_4266_90_4293}>Angela Rexton</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5d0/cae3/09dcb080fd19056d1229af89344a5715',
          }}
          style={styles.ImageBackground_I90_4266_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4266_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4266_90_4297}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4267}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('84_3976'))
        }>
        <View style={styles.View_I90_4267_90_4293}>
          <Text style={styles.Text_I90_4267_90_4293}>John Doe</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c68/86d6/59b227069142babc97ad707e5694d8ed',
          }}
          style={styles.ImageBackground_I90_4267_90_4294}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4267_90_4295}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6e/0f37/8209f99c69bd3826cef5aec0cbb02f07',
          }}
          style={styles.ImageBackground_I90_4267_90_4297}
        />
      </TouchableOpacity>
      <View style={styles.View_90_4550}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87eb/50df/06083be51696fa86315da49cf52f3dd1',
          }}
          style={styles.ImageBackground_90_4134}
        />
        <View style={styles.View_90_4169}>
          <Text style={styles.Text_90_4169}>BC</Text>
        </View>
      </View>
      <View style={styles.View_90_4135}>
        <Text style={styles.Text_90_4135}>Business Conversations</Text>
      </View>
      <View style={styles.View_90_4141}>
        <Text style={styles.Text_90_4141}>More Actions</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4143}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_3608'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e6/1917/4fd3d86cbc806782ba66d2e9e3fe1b78',
          }}
          style={styles.ImageBackground_90_4144}
        />
        <View style={styles.View_90_4149}>
          <Text style={styles.Text_90_4149}>View Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e0/8886/a9dc91376ed12da04d74406006613012',
          }}
          style={styles.ImageBackground_90_4150}
        />
      </TouchableOpacity>
      <View style={styles.View_90_4260}>
        <Text style={styles.Text_90_4260}>Created By Sierra Fox</Text>
      </View>
      <View style={styles.View_90_4548}>
        <Text style={styles.Text_90_4548}>
          A small group description, for what this group is created for. Ruules
          and other anc be added
        </Text>
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
        }}
        style={styles.ImageBackground_90_4549}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4554}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4442'))
        }>
        <View style={styles.View_90_4555}>
          <View style={styles.View_90_4560}>
            <ImageBackground
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dae/7fe0/8166a9c11e282ce263ff77c69b4fb29a',
              }}
              style={styles.ImageBackground_90_4561}
            />
          </View>
        </View>
        <View style={styles.View_90_4559}>
          <Text style={styles.Text_90_4559}>Add People</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4567}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4442'))
        }>
        <View style={styles.View_90_4568}>
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a78/07d7/db3567d25f25730591b174390a2fd346',
            }}
            style={styles.ImageBackground_90_4576}
          />
        </View>
        <View style={styles.View_90_4575}>
          <Text style={styles.Text_90_4575}>Leave Group</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15f/4cd6/bd185acbc89c4a28c33429591a9f8582',
        }}
        style={styles.TouchableOpacity_90_4551}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4170'))
        }
      />
      <View style={styles.View_90_4131} />
      <View style={styles.View_90_4133} />
      <View style={styles.View_90_4132}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I90_4132_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I90_4132_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I90_4132_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I90_4132_4_16}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4138}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_650'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f18/8f37/9f013125402dc596081d122032b2455c',
          }}
          style={styles.ImageBackground_90_4139}
        />
      </TouchableOpacity>
      <View style={styles.View_90_4162}>
        <Text style={styles.Text_90_4162}>Details</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('144.53551912568307%')},
  View_90_4261: {
    width: wp('31.733333333333334%'),
    minWidth: wp('31.733333333333334%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.608072916666667%'),
    top: hp('81.83060109289617%'),
    justifyContent: 'flex-start',
  },
  Text_90_4261: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  View_90_4262: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('94.80874316939891%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4262_90_4293: {
    flexGrow: 1,
    width: wp('24%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4262_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4262_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4262_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043701%'),
  },
  ImageBackground_I90_4262_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  View_90_4263: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('103.55191256830601%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4263_90_4293: {
    flexGrow: 1,
    width: wp('41.06666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4263_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4263_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4263_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  ImageBackground_I90_4263_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  View_90_4264: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('112.29508196721312%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4264_90_4293: {
    flexGrow: 1,
    width: wp('28.53333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4264_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4264_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4264_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  ImageBackground_I90_4264_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  View_90_4265: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('121.0382513661202%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4265_90_4293: {
    flexGrow: 1,
    width: wp('38.4%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4265_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4265_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4265_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  ImageBackground_I90_4265_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  View_90_4266: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('129.78142076502732%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4266_90_4293: {
    flexGrow: 1,
    width: wp('36%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4266_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4266_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4266_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
  ImageBackground_I90_4266_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  TouchableOpacity_90_4267: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('86.0655737704918%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4267_90_4293: {
    flexGrow: 1,
    width: wp('23.466666666666665%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4267_90_4293: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4267_90_4294: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4267_90_4295: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
  ImageBackground_I90_4267_90_4297: {
    flexGrow: 1,
    width: wp('6.384192911783853%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.53844401041667%'),
    top: hp('1.639344262295083%'),
  },
  View_90_4550: {
    width: wp('25.6%'),
    minWidth: wp('25.6%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('37.2%'),
    top: hp('17.076502732240435%'),
  },
  ImageBackground_90_4134: {
    width: wp('25.6%'),
    minWidth: wp('25.6%'),
    height: hp('13.114754098360656%'),
    minHeight: hp('13.114754098360656%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_90_4169: {
    width: wp('14.399999999999999%'),
    minWidth: wp('14.399999999999999%'),
    minHeight: hp('6.0109289617486334%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.217903645833331%'),
    top: hp('3.5519125683060153%'),
    justifyContent: 'flex-start',
  },
  Text_90_4169: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.36,
    textTransform: 'none',
  },
  View_90_4135: {
    width: wp('76.8%'),
    minWidth: wp('76.8%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('11.600000000000001%'),
    top: hp('32.37704918032787%'),
    justifyContent: 'flex-start',
  },
  Text_90_4135: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  View_90_4141: {
    width: wp('31.733333333333334%'),
    minWidth: wp('31.733333333333334%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.608072916666667%'),
    top: hp('65.98360655737704%'),
    justifyContent: 'flex-start',
  },
  Text_90_4141: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  TouchableOpacity_90_4143: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('70.83333333333334%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_90_4144: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.7333333333333325%'),
  },
  View_90_4149: {
    width: wp('44.59192708333333%'),
    minWidth: wp('44.59192708333333%'),
    minHeight: hp('2.424863387978142%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('12.401643880208331%'),
    top: hp('1.8460633324795026%'),
    justifyContent: 'flex-start',
  },
  Text_90_4149: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_90_4150: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.639344262295083%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('79.19999999999999%'),
  },
  View_90_4260: {
    width: wp('39.733333333333334%'),
    minWidth: wp('39.733333333333334%'),
    minHeight: hp('1.912568306010929%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('30.133333333333333%'),
    top: hp('37.43169398907104%'),
    justifyContent: 'flex-start',
  },
  Text_90_4260: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4548: {
    width: wp('86.62259114583334%'),
    minWidth: wp('86.62259114583334%'),
    minHeight: hp('4.918032786885246%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('7.244075520833333%'),
    top: hp('42.07650273224044%'),
    justifyContent: 'flex-start',
  },
  Text_90_4548: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_90_4549: {
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    top: hp('63.387978142076506%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.2%'),
  },
  TouchableOpacity_90_4554: {
    width: wp('18.4%'),
    minWidth: wp('18.4%'),
    height: hp('9.153005464480875%'),
    minHeight: hp('9.153005464480875%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('27.206510416666667%'),
    top: hp('50.51229508196722%'),
  },
  View_90_4555: {
    width: wp('12.8%'),
    minWidth: wp('12.8%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('2.7934448242187493%'),
    top: hp('0%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4560: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.1999999999999993%'),
    top: hp('1.6393442622950758%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_90_4561: {
    width: wp('5.440000406901042%'),
    height: hp('2.786885454355042%'),
    top: hp('0.327855511441264%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.63999837239583%'),
  },
  View_90_4559: {
    width: wp('18.4%'),
    minWidth: wp('18.4%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.103825136612016%'),
    justifyContent: 'flex-start',
  },
  Text_90_4559: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  TouchableOpacity_90_4567: {
    width: wp('20%'),
    minWidth: wp('20%'),
    height: hp('9.153005464480875%'),
    minHeight: hp('9.153005464480875%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('53.06015625%'),
    top: hp('50.51229508196722%'),
  },
  View_90_4568: {
    width: wp('12.8%'),
    minWidth: wp('12.8%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.593432617187503%'),
    top: hp('0%'),
    backgroundColor: 'rgba(33, 33, 33, 0.07999999821186066)',
    overflow: 'hidden',
  },
  ImageBackground_90_4576: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('1.6393442622950758%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('3.200000000000003%'),
  },
  View_90_4575: {
    width: wp('20%'),
    minWidth: wp('20%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.103825136612016%'),
    justifyContent: 'flex-start',
  },
  Text_90_4575: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  TouchableOpacity_90_4551: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('9.084699453551913%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('88.8%'),
  },
  View_90_4131: {
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
  View_90_4133: {
    width: wp('35.46666666666667%'),
    height: hp('0.819672131147541%'),
    minHeight: hp('0.819672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.266666666666666%'),
    top: hp('108.98564239668715%'),
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  View_90_4132: {
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
  ImageBackground_I90_4132_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I90_4132_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.60000000000001%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I90_4132_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.4%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I90_4132_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666667%'),
    top: hp('2.3224043715846996%'),
  },
  TouchableOpacity_90_4138: {
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
  ImageBackground_90_4139: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
  View_90_4162: {
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
  Text_90_4162: {
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
