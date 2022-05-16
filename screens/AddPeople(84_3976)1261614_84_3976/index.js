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
        style={styles.TouchableOpacity_84_3977}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('84_3676'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1bd/ab84/f309b186d949209fca0a54bbf6b74129',
          }}
          style={styles.ImageBackground_84_3978}
        />
      </TouchableOpacity>
      <View style={styles.View_84_3980}>
        <Text style={styles.Text_84_3980}>New Group</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_84_3981}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('84_3507'))
        }>
        <Text style={styles.Text_84_3981}>Done</Text>
      </TouchableOpacity>
      <View style={styles.View_84_3982}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde4/e737/020110de0af3f2583d7c8631dc3bbf9f',
          }}
          style={styles.ImageBackground_I84_3982_29_617}
        />
        <View style={styles.View_I84_3982_29_614}>
          <Text style={styles.Text_I84_3982_29_614}>Name</Text>
        </View>
      </View>
      <View style={styles.View_84_3983}>
        <Text style={styles.Text_84_3983}>Suggested</Text>
      </View>
      <View style={styles.View_84_3984}>
        <View style={styles.View_I84_3984_84_3946}>
          <Text style={styles.Text_I84_3984_84_3946}>Sierra Fox</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f2/c128/86608dfcb9a749668a9a364b5c5a16bc',
          }}
          style={styles.ImageBackground_I84_3984_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3984_84_3950}
        />
        <View style={styles.View_I84_3984_84_3951} />
      </View>
      <View style={styles.View_84_3985}>
        <View style={styles.View_I84_3985_84_3946}>
          <Text style={styles.Text_I84_3985_84_3946}>Michelle Kidman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c7/9ba7/3d57097b2c0f3a133a9c1746d112642a',
          }}
          style={styles.ImageBackground_I84_3985_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3985_84_3950}
        />
        <View style={styles.View_I84_3985_84_3951} />
      </View>
      <View style={styles.View_84_3986}>
        <View style={styles.View_I84_3986_84_3946}>
          <Text style={styles.Text_I84_3986_84_3946}>Taylor Swift</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c22/7f07/c44ee330d0fdf9c3b2188408e6119213',
          }}
          style={styles.ImageBackground_I84_3986_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3986_84_3950}
        />
        <View style={styles.View_I84_3986_84_3951} />
      </View>
      <View style={styles.View_84_3987}>
        <View style={styles.View_I84_3987_84_3946}>
          <Text style={styles.Text_I84_3987_84_3946}>Tracy Chapman</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5206/c0f6/70cf9cfc495a8c002cd5acb75d51faa0',
          }}
          style={styles.ImageBackground_I84_3987_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3987_84_3950}
        />
        <View style={styles.View_I84_3987_84_3951} />
      </View>
      <View style={styles.View_84_3988}>
        <View style={styles.View_I84_3988_84_3946}>
          <Text style={styles.Text_I84_3988_84_3946}>Angela Rexton</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5d0/cae3/09dcb080fd19056d1229af89344a5715',
          }}
          style={styles.ImageBackground_I84_3988_84_3948}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3988_84_3950}
        />
        <View style={styles.View_I84_3988_84_3951} />
      </View>
      <View style={styles.View_84_3989}>
        <View style={styles.View_I84_3989_37_4205}>
          <Text style={styles.Text_I84_3989_37_4205}>Anton Orico</Text>
        </View>
        <View style={styles.View_I84_3989_37_4208}>
          <Text style={styles.Text_I84_3989_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad6/beab/cdf6e20bdc1e750ab561e675842ef02b',
          }}
          style={styles.ImageBackground_I84_3989_37_4209}
        />
        <View style={styles.View_I84_3989_37_4210}>
          <Text style={styles.Text_I84_3989_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3989_37_4212}
        />
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42d5/e527/400586c900e96f6e439299f5347038c5',
        }}
        style={styles.ImageBackground_84_4029}
      />
      <View style={styles.View_84_3991}>
        <View style={styles.View_I84_3991_37_4205}>
          <Text style={styles.Text_I84_3991_37_4205}>Selena Gomez</Text>
        </View>
        <View style={styles.View_I84_3991_37_4208}>
          <Text style={styles.Text_I84_3991_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2f/5024/93dedfd5ecfba81ccefe9368929dc400',
          }}
          style={styles.ImageBackground_I84_3991_37_4209}
        />
        <View style={styles.View_I84_3991_37_4210}>
          <Text style={styles.Text_I84_3991_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I84_3991_37_4212}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_84_4039}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('84_3755'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab10/4807/9e195962fdbb32539b8d094e70dc298b',
          }}
          style={styles.ImageBackground_84_4038}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d8/c6e5/814fcb96281a593c16b769a0953dac8a',
          }}
          style={styles.ImageBackground_84_4036}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('105.60109289617485%')},
  TouchableOpacity_84_3977: {
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
  ImageBackground_84_3978: {
    width: wp('4.353600056966146%'),
    height: hp('2.2303278980359353%'),
    top: hp('0.5241685877732238%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.023193359375%'),
  },
  View_84_3980: {
    width: wp('21.333333333333336%'),
    minWidth: wp('21.333333333333336%'),
    minHeight: hp('1.912568306010929%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('39.33333333333333%'),
    top: hp('2.340147925204918%'),
    justifyContent: 'flex-start',
  },
  Text_84_3980: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  TouchableOpacity_84_3981: {
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
  Text_84_3981: {
    color: 'rgba(93, 95, 239, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_84_3982: {
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
  ImageBackground_I84_3982_29_617: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('77.21067708333334%'),
    top: hp('1.6393442622950811%'),
  },
  View_I84_3982_29_614: {
    flexGrow: 1,
    width: wp('11.466666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.685416666666666%'),
    top: hp('2.322404371584698%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3982_29_614: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_84_3983: {
    width: wp('31.733333333333334%'),
    minWidth: wp('31.733333333333334%'),
    minHeight: hp('3.1420765027322406%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('29.508196721311474%'),
    justifyContent: 'flex-start',
  },
  Text_84_3983: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'uppercase',
  },
  View_84_3984: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('33.87978142076503%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I84_3984_84_3946: {
    flexGrow: 1,
    width: wp('24%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.775956284153004%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3984_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I84_3984_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3984_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I84_3984_84_3951: {
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
  View_84_3985: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('42.62295081967213%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I84_3985_84_3946: {
    flexGrow: 1,
    width: wp('41.06666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.7759562841530112%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3985_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I84_3985_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3985_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043723%'),
  },
  View_I84_3985_84_3951: {
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
  View_84_3986: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('51.36612021857923%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I84_3986_84_3946: {
    flexGrow: 1,
    width: wp('28.53333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.775956284153004%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3986_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I84_3986_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3986_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I84_3986_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371546%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_84_3987: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('60.10928961748634%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I84_3987_84_3946: {
    flexGrow: 1,
    width: wp('38.4%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.775956284153004%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3987_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I84_3987_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3987_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I84_3987_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371546%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_84_3988: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('68.85245901639344%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I84_3988_84_3946: {
    flexGrow: 1,
    width: wp('36%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('1.775956284152997%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3988_84_3946: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  ImageBackground_I84_3988_84_3948: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I84_3988_84_3950: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_I84_3988_84_3951: {
    flexGrow: 1,
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.39114583333333%'),
    top: hp('1.5027322404371546%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_84_3989: {
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
  View_I84_3989_37_4205: {
    flexGrow: 1,
    width: wp('29.333333333333332%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158566%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3989_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I84_3989_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.5519125683060224%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3989_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I84_3989_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I84_3989_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3989_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I84_3989_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  ImageBackground_84_4029: {
    width: wp('17.066666666666666%'),
    height: hp('8.743169398907105%'),
    top: hp('18.0327868852459%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.237760416666667%'),
  },
  View_84_3991: {
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
  View_I84_3991_37_4205: {
    flexGrow: 1,
    width: wp('34.93333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158282%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3991_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I84_3991_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3991_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I84_3991_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I84_3991_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I84_3991_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I84_3991_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
  TouchableOpacity_84_4039: {
    width: wp('5.333461507161458%'),
    minWidth: wp('5.333461507161458%'),
    height: hp('2.7390711945914177%'),
    minHeight: hp('2.7390711945914177%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.541276041666666%'),
    top: hp('18.30260896943306%'),
  },
  ImageBackground_84_4038: {
    width: wp('3.5643035888671877%'),
    minWidth: wp('3.5643035888671877%'),
    height: hp('1.8259751992147477%'),
    minHeight: hp('1.8259751992147477%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.8846354166666686%'),
    top: hp('0.45652962773224104%'),
  },
  ImageBackground_84_4036: {
    width: wp('5.333461507161458%'),
    height: hp('2.7390711945914177%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
