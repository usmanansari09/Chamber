import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as NavigationService from '../../Navigators/NavigationService';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import CBInput from '../../Components/CBInput';
import {scale} from '../../Utils/scale';
import CreateSVG from '../../assets/svgs/CreateSVG';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';
import Animated from 'react-native-reanimated';
import {getDeviceHeight} from '../../Utils/extension';
import CBSvg from '../../assets/svgs/CBSvg';
import RemoveSVG from '../../assets/svgs/RemoveSVG';
import {validateEmail} from '../../Utils/ValidateUtil';
import APIManager from '../../Network/APIManager';
import ChatService from '../../Utils/ChatService';
import CBLoader from '../../Components/CBLoader';
import {usePubNub} from 'pubnub-react';
import {useDispatch} from 'react-redux';

function InviteUser(props) {
  const pubnub = usePubNub();
  const [chamber, setChamber] = useState(props.navigation.getParam('chamber'));
  const [textInput, setTextInput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState([]);
  const dispatch = useDispatch();

  const addTextInput = index => {
    const temp = JSON.parse(JSON.stringify(textInput));
    let dataArray = JSON.parse(JSON.stringify(inputData));
    temp.push(index);
    dataArray.push({email: ''});
    setInputData(dataArray);
    setTextInput(temp);
  };

  const addValues = (text, index) => {
    let dataArray = JSON.parse(JSON.stringify(inputData));
    dataArray[index].email = text;
    setInputData(dataArray);
  };

  const removeTextInput = index => {
    let tempInput = JSON.parse(JSON.stringify(textInput));
    let tempData = JSON.parse(JSON.stringify(inputData));
    tempInput.pop();
    tempData.splice(index, 1); // 2nd parameter means remove one item only
    setInputData(tempData);
    setTextInput(tempInput);
  };

  const {colors} = useTheme();

  const handleContinue = () => {
    if (inputData[0].email.length === 0) {
      DialogUtil.showWarning('add atLeast one people');
      return;
    } else {
      let valid = true;
      inputData.map((item, index) => {
        if (!validateEmail(item.email) && valid) {
          DialogUtil.showWarning(
            item.email +
              '\n' +
              (index + 1) +
              ' this is invalid email either remove it or add correct email ',
          );
          valid = false;
        }
      });
      if (!valid) {
        return;
      }
    }

    handleSendInvite();
    // console.log('members', inputData);
  };

  const handleSendInvite = () => {
    setIsLoading(true);
    APIManager.InviteUser(
      JSON.stringify({
        group: chamber.id,
        users: inputData,
      }),
    )
      .then(res => {
        setIsLoading(false);
        console.log(res);
        ChatService.addDeviceIds(pubnub, [{id: res.id}], res.users);
        NavigationService.goBack();
        dispatch(userActions.fetchGroups());
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  let fall = new Animated.Value(1);

  useEffect(() => {
    addTextInput(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={ApplicationStyles(colors).animationFullView}>
      <ScrollView bounces={false}>
        <Animated.View
          style={{
            ...ApplicationStyles(colors).fullView,
            opacity: Animated.add(0.6, Animated.multiply(fall, 0.9)),
            minHeight: getDeviceHeight(),
          }}>
          <CBAppBar title={'Invite Users'} />
          <View style={styles(colors).subContainer}>
            <Text style={styles(colors).title}>
              Add emails to invite users to this chamber
            </Text>
            {textInput.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <CBInput
                    containerStyles={styles(colors).inputContainer}
                    colors={colors}
                    placeholder={'Email'}
                    returnKeyType="next"
                    onChangeText={text => addValues(text, index)}
                  />
                  {index > 0 && (
                    <TouchableOpacity
                      style={{marginTop: scale(4)}}
                      onPress={() => removeTextInput(index)}>
                      <CBSvg
                        icon={RemoveSVG}
                        width={scale(24)}
                        height={scale(24)}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}

            <ProfileItemBtn
              style={{marginTop: scale(30), paddingHorizontal: 0}}
              icon={CreateSVG}
              label={'Add people'}
              onPress={() => addTextInput(textInput.length)}
            />

            <CBLoader isLoading={isLoading} />
          </View>
          <ProfileItemBtn
            style={{
              marginBottom: scale(40),
              paddingHorizontal: 0,
              marginHorizontal: scale(20),
            }}
            // icon={CreateSVG}
            label={'Send Invitation'}
            onPress={() => handleContinue()}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteUser);
