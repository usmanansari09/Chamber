import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {peopleStyles as styles} from './styles';
import {scale} from '../../Utils/scale';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import PeopleItem from './PeopleItem';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';
import AFonts from 'react-native-vector-icons/AntDesign';
import * as NavigationService from '../../Navigators/NavigationService';
import SearchInput from '../../Components/SearchInput';
import APIManager from '../../Network/APIManager';
import RadioBox from './RadioBox';
import CBAvatar from '../../Components/CBAvatar';
import CBSvg from '../../assets/svgs/CBSvg';
import DeleteSVG from '../../assets/svgs/DeleteSVG';
import CBLoader from '../../Components/CBLoader';
import ChatService from '../../Utils/ChatService';
import {usePubNub} from 'pubnub-react';

function AddPeoplesScreen(props) {
  const pubnub = usePubNub();
  const info = props.navigation.getParam('info');
  const group = props.navigation.getParam('group');

  let isEdition = false;
  if (info == null) {
    isEdition = true;
  }

  const [items, setItems] = useState([]);
  const [selItems, setSelItems] = useState([]);
  const {colors} = useTheme();

  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    APIManager.fetchUsers().then(res => {
      setItems(res);
    });
  }, []);

  const handleClose = () => {
    NavigationService.goBack();
  };

  const handleDone = () => {
    if (selItems.length === 0) {
      DialogUtil.showWarning('You need to add one user at least');
    }

    setIsLoading(true);
    if (isEdition) {
      handleAddMembers(group.id);
    } else {
      const totalUsers = [props.user, ...selItems];
      APIManager.createGroup(
        JSON.stringify({
          ...info,
          invites: totalUsers.map(item => ({email: item.email})),
        }),
      )
        .then(res => {
          setIsLoading(false);
          ChatService.addDeviceIds(pubnub, [{id: res.id}], totalUsers);
          const onResult = props.navigation.getParam('onResult');
          if (onResult) {
            onResult();
          }
          props.actions.fetchGroups();
          if (isEdition) {
            NavigationService.goBack();
          } else {
            NavigationService.navigate('Home');
          }
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          DialogUtil.showError(error);
        });
    }
  };

  const handleAddMembers = groupId => {
    const totalUsers = [props.user, ...selItems];
    APIManager.addMultipleMembers({
      group: groupId,
      users: totalUsers.map(item => ({email: item.email})),
    })
      .then(res => {
        console.log('successfuly added members', res);
        setIsLoading(false);
        ChatService.addDeviceIds(pubnub, [{id: groupId}], totalUsers);
        const onResult = props.navigation.getParam('onResult');
        if (onResult) {
          onResult();
        }
        props.actions.fetchGroups();
        if (isEdition) {
          NavigationService.goBack();
        } else {
          NavigationService.navigate('Home');
        }
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  const handleAddRemove = item => {
    if (selItems.some(v => v.id === item.id)) {
      setSelItems(selItems.filter(v => v.id !== item.id));
    } else {
      setSelItems([...selItems, item]);
    }
  };

  const renderHeader = () => {
    return (
      <View style={styles(colors).headerContainer}>
        <View style={styles(colors).titleContainer}>
          <TouchableOpacity
            style={{paddingVertical: scale(8), paddingRight: scale(12)}}
            onPress={() => handleClose()}>
            <AFonts name={'close'} size={scale(20)} color={colors.black} />
          </TouchableOpacity>
          <Text style={styles(colors).title}>
            {isEdition ? 'Add Users' : 'New Group'}
          </Text>
          <TouchableOpacity
            style={{paddingVertical: scale(8)}}
            onPress={() => handleDone()}>
            <Text style={styles(colors).done}>Done</Text>
          </TouchableOpacity>
        </View>
        <SearchInput
          colors={colors}
          value={searchName}
          onChangeText={text => setSearchName(text)}
        />
      </View>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={ApplicationStyles(colors).fullView}>
      {renderHeader()}
      <View style={{marginTop: scale(8)}}>
        <ScrollView horizontal={true}>
          {selItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                marginRight: scale(20),
                marginLeft: index === 0 ? scale(20) : scale(0),
              }}
              onPress={() => handleAddRemove(item)}>
              <View style={{padding: scale(4)}}>
                <CBAvatar size={scale(54)} uri={item.image} />
              </View>
              <View style={{position: 'absolute', right: 0, top: 0}}>
                <CBSvg icon={DeleteSVG} width={scale(20)} height={scale(20)} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Text style={styles(colors).suggest}>SUGGESTED</Text>
      <FlatList
        data={items.filter(
          v =>
            `${v.first_name} ${v.last_name}`
              .trim()
              .toLowerCase()
              .includes(searchName.trim().toLowerCase()) &&
            v.id !== props.user.id &&
            !(group?.users ?? []).some(u => u.id === v.id),
        )}
        style={{flex: 1}}
        renderItem={({item, index}) => (
          <PeopleItem
            item={item}
            index={index}
            renderRight={() => (
              <RadioBox
                value={selItems.some(v => v.id === item.id)}
                onChange={() => handleAddRemove(item)}
              />
            )}
          />
        )}
        keyExtractor={keyExtractor}
        ListFooterComponent={() => <View style={{marginBottom: scale(16)}} />}
      />
      <CBLoader isLoading={isLoading} />
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroups: () => {
      dispatch(userActions.fetchGroups());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPeoplesScreen);
