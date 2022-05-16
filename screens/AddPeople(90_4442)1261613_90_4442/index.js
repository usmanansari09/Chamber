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
      <View style={styles.View_90_4443}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1bd/ab84/f309b186d949209fca0a54bbf6b74129',
          }}
          style={styles.ImageBackground_90_4444}
        />
      </View>
      <View style={styles.View_90_4446}>
        <Text style={styles.Text_90_4446}>Add Users</Text>
      </View>
      <View style={styles.View_90_4447}>
        <Text style={styles.Text_90_4447}>Done</Text>
      </View>
      <View style={styles.View_90_4448}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde4/e737/020110de0af3f2583d7c8631dc3bbf9f',
          }}
          style={styles.ImageBackground_I90_4448_29_617}
        />
        <View style={styles.View_I90_4448_29_614}>
          <Text style={styles.Text_I90_4448_29_614}>Name</Text>
        </View>
      </View>
      <View style={styles.View_90_4449}>
        <Text style={styles.Text_90_4449}>Suggested</Text>
      </View>
      <View style={styles.View_90_4450}>
        <View style={styles.View_I90_4450_84_3946}>
          <Text style={styles.Text_I90_4450_84_3946}>Sierra Fox</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f2/c128/86608dfcb9a749668a9a364b5c5a16bc',
          }}
          style={styles.ImageBackground_I90_4450_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4450_84_3950}
        />
        <View style={styles.View_I90_4450_84_3951} />
      </View>
      <View style={styles.View_90_4451}>
        <View style={styles.View_I90_4451_84_3946}>
          <Text style={styles.Text_I90_4451_84_3946}>Michelle Kidman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c7/9ba7/3d57097b2c0f3a133a9c1746d112642a',
          }}
          style={styles.ImageBackground_I90_4451_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4451_84_3950}
        />
        <View style={styles.View_I90_4451_84_3951} />
      </View>
      <View style={styles.View_90_4452}>
        <View style={styles.View_I90_4452_84_3946}>
          <Text style={styles.Text_I90_4452_84_3946}>Taylor Swift</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c22/7f07/c44ee330d0fdf9c3b2188408e6119213',
          }}
          style={styles.ImageBackground_I90_4452_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4452_84_3950}
        />
        <View style={styles.View_I90_4452_84_3951} />
      </View>
      <View style={styles.View_90_4453}>
        <View style={styles.View_I90_4453_84_3946}>
          <Text style={styles.Text_I90_4453_84_3946}>Tracy Chapman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5206/c0f6/70cf9cfc495a8c002cd5acb75d51faa0',
          }}
          style={styles.ImageBackground_I90_4453_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4453_84_3950}
        />
        <View style={styles.View_I90_4453_84_3951} />
      </View>
      <View style={styles.View_90_4454}>
        <View style={styles.View_I90_4454_84_3946}>
          <Text style={styles.Text_I90_4454_84_3946}>Angela Rexton</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5d0/cae3/09dcb080fd19056d1229af89344a5715',
          }}
          style={styles.ImageBackground_I90_4454_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4454_84_3950}
        />
        <View style={styles.View_I90_4454_84_3951} />
      </View>
      <View style={styles.View_90_4455}>
        <View style={styles.View_I90_4455_37_4205}>
          <Text style={styles.Text_I90_4455_37_4205}>Anton Orico</Text>
        </View>
        <View style={styles.View_I90_4455_37_4208}>
          <Text style={styles.Text_I90_4455_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad6/beab/cdf6e20bdc1e750ab561e675842ef02b',
          }}
          style={styles.ImageBackground_I90_4455_37_4209}
        />
        <View style={styles.View_I90_4455_37_4210}>
          <Text style={styles.Text_I90_4455_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4455_37_4212}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4456}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4458'))
        }>
        <View style={styles.View_I90_4456_84_3946}>
          <Text style={styles.Text_I90_4456_84_3946}>John Doe</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c68/86d6/59b227069142babc97ad707e5694d8ed',
          }}
          style={styles.ImageBackground_I90_4456_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4456_84_3950}
        />
        <View style={styles.View_I90_4456_84_3951} />
      </TouchableOpacity>
      <View style={styles.View_90_4457}>
        <View style={styles.View_I90_4457_37_4205}>
          <Text style={styles.Text_I90_4457_37_4205}>Selena Gomez</Text>
        </View>
        <View style={styles.View_I90_4457_37_4208}>
          <Text style={styles.Text_I90_4457_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2f/5024/93dedfd5ecfba81ccefe9368929dc400',
          }}
          style={styles.ImageBackground_I90_4457_37_4209}
        />
        <View style={styles.View_I90_4457_37_4210}>
          <Text style={styles.Text_I90_4457_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I90_4457_37_4212}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('105.60109289617485%')},
  View_90_4443: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.278688524590164%'),
    minHeight: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('1.6570878159153004%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_90_4444: {
    width: wp('4.353600056966146%'),
    height: hp('2.2303278980359353%'),
    top: hp('0.5241685877732238%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.023193359375%'),
  },
  View_90_4446: {
    width: wp('19.2%'),
    minWidth: wp('19.2%'),
    minHeight: hp('1.912568306010929%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('39.33333333333333%'),
    top: hp('2.340147925204918%'),
    justifyContent: 'flex-start',
  },
  Text_90_4446: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4447: {
    width: wp('10.4%'),
    minWidth: wp('10.4%'),
    minHeight: hp('1.912568306010929%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('85.33333333333334%'),
    top: hp('2.340147925204918%'),
    justifyContent: 'flex-start',
  },
  Text_90_4447: {
    color: 'rgba(93, 95, 239, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4448: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('6.557377049180328%'),
    minHeight: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.266666666666667%'),
    top: hp('8.743169398907105%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_I90_4448_29_617: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('77.21067708333334%'),
    top: hp('1.6393442622950811%'),
  },
  View_I90_4448_29_614: {
    flexGrow: 1,
    width: wp('11.466666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.685416666666666%'),
    top: hp('2.322404371584698%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4448_29_614: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4449: {
    width: wp('31.733333333333334%'),
    minWidth: wp('31.733333333333334%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('17.823599726775956%'),
    justifyContent: 'flex-start',
  },
  Text_90_4449: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  View_90_4450: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('30.601092896174865%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4450_84_3946: {
    flexGrow: 1,
    width: wp('24%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.7759562841530077%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4450_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4450_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4450_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043712%'),
  },
  View_I90_4450_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371581%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4451: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('39.34426229508197%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4451_84_3946: {
    flexGrow: 1,
    width: wp('41.06666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.775956284153004%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4451_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4451_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4451_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I90_4451_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371617%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4452: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('48.08743169398907%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4452_84_3946: {
    flexGrow: 1,
    width: wp('28.53333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4452_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4452_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4452_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I90_4452_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371617%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4453: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('56.830601092896174%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4453_84_3946: {
    flexGrow: 1,
    width: wp('38.4%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4453_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4453_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4453_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I90_4453_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371617%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4454: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('65.57377049180327%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4454_84_3946: {
    flexGrow: 1,
    width: wp('36%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4454_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4454_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4454_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
  View_I90_4454_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371688%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4455: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('111.47540983606557%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4455_37_4205: {
    flexGrow: 1,
    width: wp('29.333333333333332%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.25361328125%'),
    top: hp('0.2732240437158566%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4455_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I90_4455_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.25361328125%'),
    top: hp('3.5519125683060224%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4455_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I90_4455_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I90_4455_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4455_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I90_4455_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  TouchableOpacity_90_4456: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('21.85792349726776%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4456_84_3946: {
    flexGrow: 1,
    width: wp('23.466666666666665%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253580729166664%'),
    top: hp('1.7759562841530077%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4456_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I90_4456_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I90_4456_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I90_4456_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371617%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4457: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('120.21857923497268%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4457_37_4205: {
    flexGrow: 1,
    width: wp('34.93333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.25361328125%'),
    top: hp('0.2732240437158282%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4457_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I90_4457_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.25361328125%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4457_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I90_4457_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I90_4457_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4457_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I90_4457_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
