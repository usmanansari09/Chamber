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
        style={styles.TouchableOpacity_37_4232}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('90_4067'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c317/57a4/bbd4dc3705fbfc9ab6cfa62b071626b1',
          }}
          style={styles.ImageBackground_I37_4232_57_3573}
        />
        <View style={styles.View_I37_4232_57_3568}>
          <Text style={styles.Text_I37_4232_57_3568}>
            Business Conversations
          </Text>
        </View>
        <View style={styles.View_I37_4232_57_3569}>
          <Text style={styles.Text_I37_4232_57_3569}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8864/73bf/70058509e98c40cedcb0d0ad9e259574',
          }}
          style={styles.ImageBackground_I37_4232_57_3570}
        />
        <View style={styles.View_I37_4232_57_3571}>
          <Text style={styles.Text_I37_4232_57_3571}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4232_57_3572}
        />
      </TouchableOpacity>
      <View style={styles.View_37_4244}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c317/57a4/bbd4dc3705fbfc9ab6cfa62b071626b1',
          }}
          style={styles.ImageBackground_I37_4244_57_3573}
        />
        <View style={styles.View_I37_4244_57_3568}>
          <Text style={styles.Text_I37_4244_57_3568}>Financing Group</Text>
        </View>
        <View style={styles.View_I37_4244_57_3569}>
          <Text style={styles.Text_I37_4244_57_3569}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f943/05f4/2dd2eb6a5d127f6170e3d8b61c2af2f2',
          }}
          style={styles.ImageBackground_I37_4244_57_3570}
        />
        <View style={styles.View_I37_4244_57_3571}>
          <Text style={styles.Text_I37_4244_57_3571}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4244_57_3572}
        />
      </View>
      <View style={styles.View_37_4250}>
        <View style={styles.View_I37_4250_37_4205}>
          <Text style={styles.Text_I37_4250_37_4205}>Michelle Kidman</Text>
        </View>
        <View style={styles.View_I37_4250_37_4208}>
          <Text style={styles.Text_I37_4250_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c7/9ba7/3d57097b2c0f3a133a9c1746d112642a',
          }}
          style={styles.ImageBackground_I37_4250_37_4209}
        />
        <View style={styles.View_I37_4250_37_4210}>
          <Text style={styles.Text_I37_4250_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4250_37_4212}
        />
      </View>
      <View style={styles.View_37_4256}>
        <View style={styles.View_I37_4256_37_4205}>
          <Text style={styles.Text_I37_4256_37_4205}>Taylor Swift</Text>
        </View>
        <View style={styles.View_I37_4256_37_4208}>
          <Text style={styles.Text_I37_4256_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c22/7f07/c44ee330d0fdf9c3b2188408e6119213',
          }}
          style={styles.ImageBackground_I37_4256_37_4209}
        />
        <View style={styles.View_I37_4256_37_4210}>
          <Text style={styles.Text_I37_4256_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4256_37_4212}
        />
      </View>
      <View style={styles.View_37_4262}>
        <View style={styles.View_I37_4262_37_4205}>
          <Text style={styles.Text_I37_4262_37_4205}>Tracy Chapman</Text>
        </View>
        <View style={styles.View_I37_4262_37_4208}>
          <Text style={styles.Text_I37_4262_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5206/c0f6/70cf9cfc495a8c002cd5acb75d51faa0',
          }}
          style={styles.ImageBackground_I37_4262_37_4209}
        />
        <View style={styles.View_I37_4262_37_4210}>
          <Text style={styles.Text_I37_4262_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4262_37_4212}
        />
      </View>
      <View style={styles.View_37_4268}>
        <View style={styles.View_I37_4268_37_4205}>
          <Text style={styles.Text_I37_4268_37_4205}>Angela Rexton</Text>
        </View>
        <View style={styles.View_I37_4268_37_4208}>
          <Text style={styles.Text_I37_4268_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5d0/cae3/09dcb080fd19056d1229af89344a5715',
          }}
          style={styles.ImageBackground_I37_4268_37_4209}
        />
        <View style={styles.View_I37_4268_37_4210}>
          <Text style={styles.Text_I37_4268_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4268_37_4212}
        />
      </View>
      <View style={styles.View_37_4274}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c317/57a4/bbd4dc3705fbfc9ab6cfa62b071626b1',
          }}
          style={styles.ImageBackground_I37_4274_57_3573}
        />
        <View style={styles.View_I37_4274_57_3568}>
          <Text style={styles.Text_I37_4274_57_3568}>Sweet Group</Text>
        </View>
        <View style={styles.View_I37_4274_57_3569}>
          <Text style={styles.Text_I37_4274_57_3569}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ace9/3d03/32bb339c3eeeba78b8382eddb7b140a1',
          }}
          style={styles.ImageBackground_I37_4274_57_3570}
        />
        <View style={styles.View_I37_4274_57_3571}>
          <Text style={styles.Text_I37_4274_57_3571}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4274_57_3572}
        />
      </View>
      <View style={styles.View_37_4280}>
        <View style={styles.View_I37_4280_37_4205}>
          <Text style={styles.Text_I37_4280_37_4205}>Business group VII</Text>
        </View>
        <View style={styles.View_I37_4280_37_4208}>
          <Text style={styles.Text_I37_4280_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/491a/1cc5/80133e9fdb2b75e5b191746b749e58dd',
          }}
          style={styles.ImageBackground_I37_4280_37_4209}
        />
        <View style={styles.View_I37_4280_37_4210}>
          <Text style={styles.Text_I37_4280_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4280_37_4212}
        />
      </View>
      <View style={styles.View_37_4286}>
        <View style={styles.View_I37_4286_37_4205}>
          <Text style={styles.Text_I37_4286_37_4205}>Go Group IX</Text>
        </View>
        <View style={styles.View_I37_4286_37_4208}>
          <Text style={styles.Text_I37_4286_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c1b/0a98/dff3f0bff2b2fb6fabb3e14f36d2f92e',
          }}
          style={styles.ImageBackground_I37_4286_37_4209}
        />
        <View style={styles.View_I37_4286_37_4210}>
          <Text style={styles.Text_I37_4286_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4286_37_4212}
        />
      </View>
      <View style={styles.View_37_4292}>
        <View style={styles.View_I37_4292_37_4205}>
          <Text style={styles.Text_I37_4292_37_4205}>Anton Orico</Text>
        </View>
        <View style={styles.View_I37_4292_37_4208}>
          <Text style={styles.Text_I37_4292_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad6/beab/cdf6e20bdc1e750ab561e675842ef02b',
          }}
          style={styles.ImageBackground_I37_4292_37_4209}
        />
        <View style={styles.View_I37_4292_37_4210}>
          <Text style={styles.Text_I37_4292_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4292_37_4212}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_37_4238}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('29_650'))
        }>
        <View style={styles.View_I37_4238_37_4205}>
          <Text style={styles.Text_I37_4238_37_4205}>John Doe</Text>
        </View>
        <View style={styles.View_I37_4238_37_4208}>
          <Text style={styles.Text_I37_4238_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c68/86d6/59b227069142babc97ad707e5694d8ed',
          }}
          style={styles.ImageBackground_I37_4238_37_4209}
        />
        <View style={styles.View_I37_4238_37_4210}>
          <Text style={styles.Text_I37_4238_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4238_37_4212}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_54_4180}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen('54_3887'))
        }>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39c5/7629/4c48bd1c9a1e7a3375378e346ee3b7da',
          }}
          style={styles.ImageBackground_29_588}
        />
        <View style={styles.View_29_622}>
          <Text style={styles.Text_29_622}>Bikesh Shrestha</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_37_4206}>
        <Text style={styles.Text_37_4206}>Conversations</Text>
      </View>
      <View style={styles.View_37_4298}>
        <View style={styles.View_I37_4298_37_4205}>
          <Text style={styles.Text_I37_4298_37_4205}>Selena Gomez</Text>
        </View>
        <View style={styles.View_I37_4298_37_4208}>
          <Text style={styles.Text_I37_4298_37_4208}>
            You: Wow, What model is that. I want t..
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2f/5024/93dedfd5ecfba81ccefe9368929dc400',
          }}
          style={styles.ImageBackground_I37_4298_37_4209}
        />
        <View style={styles.View_I37_4298_37_4210}>
          <Text style={styles.Text_I37_4298_37_4210}>3:30 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/5350/535a655299a376337e6a0e710e3898d0',
          }}
          style={styles.ImageBackground_I37_4298_37_4212}
        />
      </View>
      <View style={styles.View_37_4304}>
        <View style={styles.View_29_623}>
          <Text style={styles.Text_29_623}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3ca/7a66/2f2610064db806a16490a609f444cd9e',
          }}
          style={styles.ImageBackground_29_610}
        />
      </View>
      <View style={styles.View_29_561}>
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/1993/2a5466e5d8b5ae10e30983bee3fcb693',
          }}
          style={styles.ImageBackground_I29_561_4_11}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/ee76/df2e2c7abb9c2fddf7996efc3008a4bf',
          }}
          style={styles.ImageBackground_I29_561_4_12}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e5/7116/8b58a85d0a97da5e53a5fff1e2415392',
          }}
          style={styles.ImageBackground_I29_561_4_14}
        />
        <ImageBackground
          source={{
            uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d',
          }}
          style={styles.ImageBackground_I29_561_4_16}
        />
      </View>
      <View style={styles.View_54_3416}>
        <View style={styles.View_I54_3416_37_4199}>
          <View style={styles.View_I54_3416_54_3511}>
            <ImageBackground
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a02b/320a/3baff7acbabed2c3b175f048d5da74b3',
              }}
              style={styles.ImageBackground_I54_3416_29_589}
            />
            <View style={styles.View_I54_3416_29_603}>
              <Text style={styles.Text_I54_3416_29_603}>Chats</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I54_3416_54_3523}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen('84_3507'))
            }>
            <View style={styles.View_I54_3416_37_4186}>
              <ImageBackground
                source={{
                  uri: 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a41/639e/5a72ee906fda24de82d2ea52f65d7057',
                }}
                style={styles.ImageBackground_I54_3416_37_4187}
              />
            </View>
            <View style={styles.View_I54_3416_37_4189}>
              <Text style={styles.Text_I54_3416_37_4189}>Create</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_I54_3416_29_568} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView_1: {backgroundColor: 'rgba(255, 255, 255, 1)'},
  View_2: {height: hp('148.63387978142077%')},
  TouchableOpacity_37_4232: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('38.25136612021858%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  ImageBackground_I37_4232_57_3573: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.064176432291667%'),
    top: hp('0.6830601092896202%'),
  },
  View_I37_4232_57_3568: {
    flexGrow: 1,
    width: wp('57.599999999999994%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158495%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4232_57_3568: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4232_57_3569: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.5519125683060153%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4232_57_3569: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4232_57_3570: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.333333333333334%'),
    top: hp('0.6830601092896202%'),
  },
  View_I37_4232_57_3571: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.092896174863391%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4232_57_3571: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4232_57_3572: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_37_4244: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('46.994535519125684%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  ImageBackground_I37_4244_57_3573: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.064176432291667%'),
    top: hp('0.6830601092896131%'),
  },
  View_I37_4244_57_3568: {
    flexGrow: 1,
    width: wp('40.8%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158495%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4244_57_3568: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4244_57_3569: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4244_57_3569: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4244_57_3570: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.333333333333334%'),
    top: hp('0.6830601092896131%'),
  },
  View_I37_4244_57_3571: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4244_57_3571: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4244_57_3572: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043723%'),
  },
  View_37_4250: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('55.73770491803278%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4250_37_4205: {
    flexGrow: 1,
    width: wp('41.06666666666667%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158495%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4250_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4250_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.5519125683060153%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4250_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4250_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4250_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.092896174863391%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4250_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4250_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043723%'),
  },
  View_37_4256: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('64.48087431693989%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4256_37_4205: {
    flexGrow: 1,
    width: wp('28.53333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158566%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4256_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4256_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4256_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4256_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4256_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4256_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4256_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_37_4262: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('73.224043715847%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4262_37_4205: {
    flexGrow: 1,
    width: wp('38.4%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158424%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4262_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4262_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568305994%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4262_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4262_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4262_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4262_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4262_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_37_4268: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('81.9672131147541%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4268_37_4205: {
    flexGrow: 1,
    width: wp('36%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158424%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4268_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4268_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4268_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4268_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4268_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4268_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4268_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_37_4274: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('90.7103825136612%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  ImageBackground_I37_4274_57_3573: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('5.064176432291667%'),
    top: hp('0.6830601092896131%'),
  },
  View_I37_4274_57_3568: {
    flexGrow: 1,
    width: wp('31.733333333333334%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158424%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4274_57_3568: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4274_57_3569: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.5519125683060224%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4274_57_3569: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4274_57_3570: {
    flexGrow: 1,
    width: wp('10.133333333333333%'),
    height: hp('5.191256830601093%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.333333333333334%'),
    top: hp('0.6830601092896131%'),
  },
  View_I37_4274_57_3571: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4274_57_3571: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4274_57_3572: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  View_37_4280: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('99.4535519125683%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4280_37_4205: {
    flexGrow: 1,
    width: wp('45.33333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158566%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4280_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4280_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4280_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4280_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4280_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.092896174863398%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4280_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4280_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.65027322404373%'),
  },
  View_37_4286: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('108.19672131147541%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4286_37_4205: {
    flexGrow: 1,
    width: wp('29.333333333333332%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158424%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4286_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4286_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4286_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4286_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4286_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.092896174863398%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4286_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4286_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043701%'),
  },
  View_37_4292: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('116.93989071038251%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4292_37_4205: {
    flexGrow: 1,
    width: wp('29.333333333333332%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158566%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4292_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4292_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568305994%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4292_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4292_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4292_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4292_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4292_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.6502732240437155%'),
  },
  TouchableOpacity_37_4238: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('29.508196721311474%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4238_37_4205: {
    flexGrow: 1,
    width: wp('23.466666666666665%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.27322404371584597%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4238_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4238_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.5519125683060118%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4238_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4238_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4238_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.092896174863391%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4238_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4238_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043719%'),
  },
  TouchableOpacity_54_4180: {
    width: wp('58.387109375%'),
    minWidth: wp('58.387109375%'),
    height: hp('7.650273224043716%'),
    minHeight: hp('7.650273224043716%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('14.207650273224044%'),
  },
  ImageBackground_29_588: {
    width: wp('14.933333333333335%'),
    minWidth: wp('14.933333333333335%'),
    height: hp('7.650273224043716%'),
    minHeight: hp('7.650273224043716%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_29_622: {
    width: wp('39.46666666666667%'),
    minWidth: wp('39.46666666666667%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.920442708333333%'),
    top: hp('2.185792349726775%'),
    justifyContent: 'flex-start',
  },
  Text_29_622: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_37_4206: {
    width: wp('35.46666666666667%'),
    minWidth: wp('35.46666666666667%'),
    minHeight: hp('3.0054644808743167%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('25.136612021857925%'),
    justifyContent: 'flex-start',
  },
  Text_37_4206: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_37_4298: {
    width: wp('93.60000000000001%'),
    minWidth: wp('93.60000000000001%'),
    height: hp('7.650273745177222%'),
    minHeight: hp('7.650273745177222%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('125.68306010928963%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  View_I37_4298_37_4205: {
    flexGrow: 1,
    width: wp('34.93333333333333%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('0.2732240437158282%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4298_37_4205: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.18,
    textTransform: 'none',
  },
  View_I37_4298_37_4208: {
    flexGrow: 1,
    width: wp('69.66904296874999%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('18.253597005208334%'),
    top: hp('3.551912568306008%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4298_37_4208: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: 0,
    textTransform: 'none',
  },
  ImageBackground_I37_4298_37_4209: {
    flexGrow: 1,
    width: wp('12.8%'),
    height: hp('6.557377049180328%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  View_I37_4298_37_4210: {
    flexGrow: 1,
    width: wp('10.666666666666668%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.93310546875%'),
    top: hp('1.0928961748633839%'),
    justifyContent: 'flex-start',
  },
  Text_I37_4298_37_4210: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.1,
    textTransform: 'none',
  },
  ImageBackground_I37_4298_37_4212: {
    flexGrow: 1,
    width: wp('93.60000000000001%'),
    height: hp('7.256737704973419e-7%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('7.650273224043687%'),
  },
  View_37_4304: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('7.650273224043716%'),
    minHeight: hp('7.650273224043716%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('5.46448087431694%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
  },
  View_29_623: {
    width: wp('20%'),
    minWidth: wp('20%'),
    minHeight: hp('3.9617486338797816%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.471321614583333%'),
    top: hp('1.8444207196678626%'),
    justifyContent: 'flex-start',
  },
  Text_29_623: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textTransform: 'none',
  },
  ImageBackground_29_610: {
    width: wp('6.4%'),
    height: hp('3.278688524590164%'),
    top: hp('2.1857923497267766%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('87.53802083333333%'),
  },
  View_29_561: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('6.0109289617486334%'),
    minHeight: hp('6.0109289617486334%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.07132161458333333%'),
    top: hp('0%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  ImageBackground_I29_561_4_11: {
    flexGrow: 1,
    width: wp('10.6015625%'),
    height: hp('1.5158731429303278%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('6.874739583333334%'),
    top: hp('2.2086721951844264%'),
  },
  ImageBackground_I29_561_4_12: {
    flexGrow: 1,
    width: wp('6.533333333333332%'),
    height: hp('1.5710382513661203%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('89.6%'),
    top: hp('2.3224043715846996%'),
  },
  ImageBackground_I29_561_4_14: {
    flexGrow: 1,
    width: wp('4.3999999999999995%'),
    height: hp('1.366120218579235%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('78.39999999999999%'),
    top: hp('2.459016393442623%'),
  },
  ImageBackground_I29_561_4_16: {
    flexGrow: 1,
    width: wp('4.072633616129558%'),
    height: hp('1.49802888026003%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('84.26666666666665%'),
    top: hp('2.3224043715846996%'),
  },
  View_54_3416: {
    width: wp('100%'),
    minWidth: wp('100%'),
    height: hp('12.704918032786885%'),
    minHeight: hp('12.704918032786885%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('98.224043715847%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  View_I54_3416_37_4199: {
    flexGrow: 1,
    width: wp('53.854427083333334%'),
    height: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('23.072786458333333%'),
    top: hp('1.9238414660177483%'),
  },
  View_I54_3416_54_3511: {
    width: wp('9.333333333333334%'),
    minWidth: wp('9.333333333333334%'),
    height: hp('6.830601092896176%'),
    minHeight: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('0%'),
  },
  ImageBackground_I54_3416_29_589: {
    width: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    top: hp('0%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0.40000000000000213%'),
  },
  View_I54_3416_29_603: {
    width: wp('9.333333333333334%'),
    minWidth: wp('9.333333333333334%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('4.78142076502732%'),
    justifyContent: 'flex-start',
  },
  Text_I54_3416_29_603: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  TouchableOpacity_I54_3416_54_3523: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    height: hp('6.830601092896176%'),
    minHeight: hp('6.830601092896176%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('43.18776041666667%'),
    top: hp('0%'),
  },
  View_I54_3416_37_4186: {
    width: wp('8.533333333333333%'),
    minWidth: wp('8.533333333333333%'),
    height: hp('4.371584699453552%'),
    minHeight: hp('4.371584699453552%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.0666666666666629%'),
    top: hp('0%'),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  ImageBackground_I54_3416_37_4187: {
    width: wp('5.973333740234375%'),
    height: hp('3.0601094980708887%'),
    top: hp('0.6557443754269201%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('1.27999674479166%'),
  },
  View_I54_3416_37_4189: {
    width: wp('10.666666666666668%'),
    minWidth: wp('10.666666666666668%'),
    minHeight: hp('2.0491803278688523%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('0%'),
    top: hp('4.78142076502732%'),
    justifyContent: 'flex-start',
  },
  Text_I54_3416_37_4189: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: -0.12,
    textTransform: 'none',
  },
  View_I54_3416_29_568: {
    flexGrow: 1,
    width: wp('35.46666666666667%'),
    height: hp('0.819672131147541%'),
    marginLeft: 0,
    marginTop: 0,
    position: 'absolute',
    left: wp('32.33798828125%'),
    top: hp('10.833806939463798%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
