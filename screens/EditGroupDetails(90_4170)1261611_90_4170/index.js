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
      <View style={styles.View_90_4171}>
        <View style={styles.View_90_4172}>
          <Text style={styles.Text_90_4172}>Business Conversations</Text>
        </View>
      </View>
      <View style={styles.View_90_4257}>
        <View style={styles.View_90_4258}>
          <Text style={styles.Text_90_4258}>Descriptions</Text>
        </View>
      </View>
      <View style={styles.View_90_4173}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1bd/ab84/f309b186d949209fca0a54bbf6b74129',
          }}
          style={styles.ImageBackground_90_4174}
        />
      </View>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba1c/8020/b06c6109df58fc7d00de2822d3215da7',
        }}
        style={styles.ImageBackground_90_4176}
      />
      <View style={styles.View_90_4256}>
        <Text style={styles.Text_90_4256}>BC</Text>
      </View>
      <View style={styles.View_90_4177}>
        <Text style={styles.Text_90_4177}>Edit Profile</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_90_4178}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4130'))
        }>
        <Text style={styles.Text_90_4178}>Save</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9128/34ae/e21355b9ad48999ed81d60963d523994',
        }}
        style={styles.ImageBackground_90_4179}
      />
      <View style={styles.View_90_4181}>
        <View style={styles.View_I90_4181_6747_5898}>
          <View style={styles.View_I90_4181_6747_5898_6747_1508}>
            <View style={styles.View_I90_4181_6747_5898_6747_1282}>
              <View style={styles.View_I90_4181_6747_5898_6747_1282_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1282_49_26}>
                  Z
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1283}>
              <View style={styles.View_I90_4181_6747_5898_6747_1283_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1283_49_26}>
                  X
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1284}>
              <View style={styles.View_I90_4181_6747_5898_6747_1284_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1284_49_26}>
                  C
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1285}>
              <View style={styles.View_I90_4181_6747_5898_6747_1285_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1285_49_26}>
                  V
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1286}>
              <View style={styles.View_I90_4181_6747_5898_6747_1286_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1286_49_26}>
                  B
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1287}>
              <View style={styles.View_I90_4181_6747_5898_6747_1287_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1287_49_26}>
                  N
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1288}>
              <View style={styles.View_I90_4181_6747_5898_6747_1288_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1288_49_26}>
                  M
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I90_4181_6747_5898_6747_1507}>
            <View style={styles.View_I90_4181_6747_5898_6747_1289}>
              <View style={styles.View_I90_4181_6747_5898_6747_1289_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1289_49_26}>
                  A
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1290}>
              <View style={styles.View_I90_4181_6747_5898_6747_1290_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1290_49_26}>
                  S
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1291}>
              <View style={styles.View_I90_4181_6747_5898_6747_1291_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1291_49_26}>
                  D
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1292}>
              <View style={styles.View_I90_4181_6747_5898_6747_1292_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1292_49_26}>
                  F
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1293}>
              <View style={styles.View_I90_4181_6747_5898_6747_1293_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1293_49_26}>
                  G
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1294}>
              <View style={styles.View_I90_4181_6747_5898_6747_1294_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1294_49_26}>
                  H
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1295}>
              <View style={styles.View_I90_4181_6747_5898_6747_1295_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1295_49_26}>
                  J
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1296}>
              <View style={styles.View_I90_4181_6747_5898_6747_1296_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1296_49_26}>
                  K
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1297}>
              <View style={styles.View_I90_4181_6747_5898_6747_1297_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1297_49_26}>
                  L
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I90_4181_6747_5898_6747_1506}>
            <View style={styles.View_I90_4181_6747_5898_6747_1281}>
              <View style={styles.View_I90_4181_6747_5898_6747_1281_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1281_49_26}>
                  Q
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1298}>
              <View style={styles.View_I90_4181_6747_5898_6747_1298_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1298_49_26}>
                  W
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1299}>
              <View style={styles.View_I90_4181_6747_5898_6747_1299_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1299_49_26}>
                  E
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1300}>
              <View style={styles.View_I90_4181_6747_5898_6747_1300_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1300_49_26}>
                  R
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1301}>
              <View style={styles.View_I90_4181_6747_5898_6747_1301_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1301_49_26}>
                  T
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1302}>
              <View style={styles.View_I90_4181_6747_5898_6747_1302_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1302_49_26}>
                  Y
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1303}>
              <View style={styles.View_I90_4181_6747_5898_6747_1303_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1303_49_26}>
                  U
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1304}>
              <View style={styles.View_I90_4181_6747_5898_6747_1304_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1304_49_26}>
                  I
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1305}>
              <View style={styles.View_I90_4181_6747_5898_6747_1305_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1305_49_26}>
                  O
                </Text>
              </View>
            </View>
            <View style={styles.View_I90_4181_6747_5898_6747_1306}>
              <View style={styles.View_I90_4181_6747_5898_6747_1306_49_26}>
                <Text style={styles.Text_I90_4181_6747_5898_6747_1306_49_26}>
                  P
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I90_4181_6747_5898_6747_1523}>
            <ImageBackground
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4c/a798/1d15b80f3c2729804ec0476dfd7d9d5c',
              }}
              style={
                styles.ImageBackground_I90_4181_6747_5898_6747_1523_6745_8518
              }
            />
          </View>
          <View style={styles.View_I90_4181_6747_5898_6747_1526}>
            <ImageBackground
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b5/d1ca/19c1b0b0fb9ac6fb5148bd6744720d63',
              }}
              style={
                styles.ImageBackground_I90_4181_6747_5898_6747_1526_75_1003
              }
            />
          </View>
        </View>
        <View style={styles.View_I90_4181_6747_5899}>
          <View style={styles.View_I90_4181_6747_5899_6743_4202} />
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1024/8b56/342f3e17777e9aa589295ce4566d9e24',
            }}
            style={styles.ImageBackground_I90_4181_6747_5899_6743_4203}
          />
          <ImageBackground
            source={{
              uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d09f/bcaf/6f745c25c3deabf58dd57559c65337c1',
            }}
            style={styles.ImageBackground_I90_4181_6747_5899_6743_4204}
          />
          <View style={styles.View_I90_4181_6747_5899_6743_4205}>
            <View style={styles.View_I90_4181_6747_5899_6743_4205_76_1117}>
              <Text style={styles.Text_I90_4181_6747_5899_6743_4205_76_1117}>
                space
              </Text>
            </View>
          </View>
          <View style={styles.View_I90_4181_6747_5899_6743_4206}>
            <View style={styles.View_I90_4181_6747_5899_6743_4206_6743_6596}>
              <Text style={styles.Text_I90_4181_6747_5899_6743_4206_6743_6596}>
                return
              </Text>
            </View>
          </View>
          <View style={styles.View_I90_4181_6747_5899_6743_4207}>
            <View style={styles.View_I90_4181_6747_5899_6743_4207_6743_6734}>
              <Text style={styles.Text_I90_4181_6747_5899_6743_4207_6743_6734}>
                123
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('100%')},
  View_90_4171: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('7.275541795665634%'),
    minHeight: hp('7.275541795665634%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('30.959752321981426%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4172: {
    width: wp('44%'),
    minWidth: wp('44%'),
    minHeight: hp('2.1671826625387%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.822265625%'),
    top: hp('2.6315789473684177%'),
    justifyContent: 'flex-start',
  },
  Text_90_4172: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4257: {
    width: wp('87.46666666666667%'),
    minWidth: wp('87.46666666666667%'),
    height: hp('12.229102167182662%'),
    minHeight: hp('12.229102167182662%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.4%'),
    top: hp('39.78328173374613%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_90_4258: {
    width: wp('23.466666666666665%'),
    minWidth: wp('23.466666666666665%'),
    minHeight: hp('2.1671826625387%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.822314453124999%'),
    top: hp('2.631578947368425%'),
    justifyContent: 'flex-start',
  },
  Text_90_4258: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  View_90_4173: {
    width: wp('6.4%'),
    minWidth: wp('6.4%'),
    height: hp('3.7151702786377707%'),
    minHeight: hp('3.7151702786377707%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.214583333333334%'),
    top: hp('1.8776908378482973%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_90_4174: {
    width: wp('4.353600056966146%'),
    height: hp('2.5272446151119268%'),
    top: hp('0.5939495452786376%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.023193359375%'),
  },
  ImageBackground_90_4176: {
    width: wp('27.66197916666667%'),
    minWidth: wp('27.66197916666667%'),
    height: hp('16.05765044504644%'),
    minHeight: hp('16.05765044504644%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('33.86666666666667%'),
    top: hp('10.237428647445821%'),
  },
  View_90_4256: {
    width: wp('14.399999999999999%'),
    minWidth: wp('14.399999999999999%'),
    minHeight: hp('6.811145510835913%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('41.06666666666667%'),
    top: hp('14.483737059791022%'),
    justifyContent: 'flex-start',
  },
  Text_90_4256: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.36,
    textTransform: 'none',
  },
  View_90_4177: {
    width: wp('20.8%'),
    minWidth: wp('20.8%'),
    minHeight: hp('2.1671826625387%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('39.6%'),
    top: hp('2.651684645897833%'),
    justifyContent: 'flex-start',
  },
  Text_90_4177: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  TouchableOpacity_90_4178: {
    width: wp('8.799999999999999%'),
    minWidth: wp('8.799999999999999%'),
    minHeight: hp('2.1671826625387%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('85.33333333333334%'),
    top: hp('2.651684645897833%'),
    justifyContent: 'flex-start',
  },
  Text_90_4178: {
    color: 'rgba(93, 95, 239, 1)',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.14,
    textTransform: 'none',
  },
  ImageBackground_90_4179: {
    width: wp('6.4%'),
    height: hp('3.7151702786377707%'),
    top: hp('21.826625386996902%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('44.461979166666666%'),
  },
  View_90_4181: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('45.356037151702786%'),
    minHeight: hp('45.356037151702786%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('54.643962848297214%'),
    backgroundColor: 'rgba(206, 210, 217, 0.699999988079071)',
    overflow: 'hidden',
  },
  View_I90_4181_6747_5898: {
    flexGrow: 1,
    width: wp('100%'),
    height: hp('26.160990712074305%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_I90_4181_6747_5898_6747_1508: {
    flexGrow: 1,
    width: wp('69.33333333333334%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('15.466666666666667%'),
    top: hp('17.95665634674922%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4181_6747_5898_6747_1282: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1282_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1282_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1283: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('10.133333333333335%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1283_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1283_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1284: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('20.266666666666666%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1284_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1284_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1285: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('30.4%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1285_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1285_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1286: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('40.53333333333334%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1286_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1286_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1287: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('50.66666666666666%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1287_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1287_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1288: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('60.8%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1288_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1288_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1507: {
    flexGrow: 1,
    width: wp('89.60000000000001%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.800000000000001%'),
    top: hp('9.597523219814242%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4181_6747_5898_6747_1289: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1289_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1289_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1290: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('10.133333333333333%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1290_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1290_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1291: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('20.266666666666666%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1291_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1291_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1292: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('30.399999999999995%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1292_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1292_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1293: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('40.53333333333333%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1293_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1293_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1294: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('50.66666666666667%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1294_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1294_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1295: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('60.80000000000001%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1295_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1295_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1296: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('70.93333333333334%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1296_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1296_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1297: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('81.06666666666668%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1297_49_26: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693464%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1297_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1506: {
    flexGrow: 1,
    width: wp('97.06666666666666%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.3333333333333335%'),
    top: hp('1.238390092879257%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I90_4181_6747_5898_6747_1281: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1281_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1281_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1298: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('9.866666666666667%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1298_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1298_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1299: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('19.733333333333334%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1299_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1299_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1300: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('29.6%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1300_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1300_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1301: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('39.46666666666666%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1301_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1301_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1302: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('49.333333333333336%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1302_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1302_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1303: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('59.199999999999996%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1303_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1303_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1304: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('69.06666666666666%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1304_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1304_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1305: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93333333333334%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1305_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1305_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1306: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    height: hp('6.656346749226007%'),
    minHeight: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('88.8%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5898_6747_1306_49_26: {
    flexGrow: 1,
    width: wp('8.266666666666666%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.0835913312693535%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5898_6747_1306_49_26: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '300',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  View_I90_4181_6747_5898_6747_1523: {
    flexGrow: 1,
    width: wp('11.200000000000001%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.8%'),
    top: hp('17.95665634674922%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  ImageBackground_I90_4181_6747_5898_6747_1523_6745_8518: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('4.953560371517028%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.3333333333333333%'),
    top: hp('0.9287925696594499%'),
  },
  View_I90_4181_6747_5898_6747_1526: {
    flexGrow: 1,
    width: wp('11.200000000000001%'),
    height: hp('6.5015479876160995%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('88%'),
    top: hp('17.95665634674922%'),
    backgroundColor: 'rgba(174, 179, 190, 1)',
  },
  ImageBackground_I90_4181_6747_5898_6747_1526_75_1003: {
    flexGrow: 1,
    width: wp('8.533333333333333%'),
    height: hp('4.953560371517028%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.3333333333333286%'),
    top: hp('0.7739938080495392%'),
  },
  View_I90_4181_6747_5899: {
    flexGrow: 1,
    width: wp('100%'),
    height: hp('19.195046439628484%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('26.1609907120743%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_I90_4181_6747_5899_6743_4202: {
    flexGrow: 1,
    width: wp('35.46666666666667%'),
    height: hp('0.9287925696594427%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.266666666666666%'),
    top: hp('17.027863777089777%'),
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  ImageBackground_I90_4181_6747_5899_6743_4203: {
    flexGrow: 1,
    width: wp('11.200000000000001%'),
    height: hp('6.5015479876160995%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84%'),
    top: hp('9.907120743034056%'),
  },
  ImageBackground_I90_4181_6747_5899_6743_4204: {
    flexGrow: 1,
    width: wp('11.200000000000001%'),
    height: hp('6.5015479876160995%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('4.8%'),
    top: hp('9.907120743034056%'),
  },
  View_I90_4181_6747_5899_6743_4205: {
    flexGrow: 1,
    width: wp('48.53333333333333%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('25.6%'),
    top: hp('0.46439628482971784%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  View_I90_4181_6747_5899_6743_4205_76_1117: {
    flexGrow: 1,
    width: wp('48.53333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.8575851393188998%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5899_6743_4205_76_1117: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.32,
    textTransform: 'none',
  },
  View_I90_4181_6747_5899_6743_4206: {
    flexGrow: 1,
    width: wp('23.200000000000003%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('76%'),
    top: hp('0.46439628482971784%'),
    backgroundColor: 'rgba(15, 119, 240, 1)',
  },
  View_I90_4181_6747_5899_6743_4206_6743_6596: {
    flexGrow: 1,
    width: wp('23.200000000000003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.8575851393188998%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5899_6743_4206_6743_6596: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.32,
    textTransform: 'none',
  },
  View_I90_4181_6747_5899_6743_4207: {
    flexGrow: 1,
    width: wp('23.200000000000003%'),
    height: hp('6.656346749226007%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.8%'),
    top: hp('0.46439628482971784%'),
    backgroundColor: 'rgba(174, 179, 190, 1)',
  },
  View_I90_4181_6747_5899_6743_4207_6743_6734: {
    flexGrow: 1,
    width: wp('23.200000000000003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('1.8575851393188998%'),
    justifyContent: 'flex-start',
  },
  Text_I90_4181_6747_5899_6743_4207_6743_6734: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.32,
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
