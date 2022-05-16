import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import {styles} from './styles';
import {scale} from '../../../Utils/scale';
import CBSvg from '../../../assets/svgs/CBSvg';
import SearchSVG from '../../../assets/svgs/SearchSVG';
import CBAvatar from '../../../Components/CBAvatar';
import ChatListItem from './ChatListItem';
import * as NavigationService from '../../../Navigators/NavigationService';
import connect from 'react-redux/lib/connect/connect';
import UserService from '../../../Utils/UserService';
import {useTheme} from '../../../Providers/ThemeProvider';
import SearchInput from '../../../Components/SearchInput';
import * as userActions from '../../../Sagas/UserSaga/actions';
import APIManager from '../../../Network/APIManager';
import UserListItem from './UserListItem';
import moment from 'moment';
import RemotePushController from '../../../RemotePushController';

function HomeChats(props) {
  const {colors} = useTheme();
  const {user, groupList = []} = props;

  const [searchStr, setSearchStr] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    console.log('groupList', groupList);
    APIManager.fetchUsers().then(res => {
      console.log('users: ', res);
      setUserList(res);
    });
  }, [groupList]);

  if (user === {} || user === undefined) {
    return null;
  }

  let filteredList = userList.filter(
    u =>
      !groupList.some(g => !g.group_chat && g.users.some(gu => gu.id === u.id)),
  );

  filteredList = filteredList.filter(u => u.id !== user.id);

  const totalList = [
    ...groupList.filter(
      g =>
        (g.created_by.id === user.id || g.users.some(u => u.id === user.id)) &&
        g.name.toLowerCase().includes(searchStr.toLowerCase().trim()),
    ),
    ...filteredList.filter(g =>
      UserService.getUserName(g)
        .toLowerCase()
        .includes(searchStr.toLowerCase().trim()),
    ),
  ];

  console.log(totalList);

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <RemotePushController onRefresh={() => props.actions.fetchGroups()} />
      <FlatList
        data={totalList.sort((a, b) =>
          moment.utc(a.last_message?.sent_at ?? '1999/1/1').toDate() <
          moment.utc(b.last_message?.sent_at ?? '1999/1/1').toDate()
            ? 1
            : -1,
        )}
        style={{flex: 1}}
        renderItem={({item, index}) =>
          item.created_by != null ? (
            <ChatListItem item={item} index={index} />
          ) : (
            <UserListItem item={item} index={index} />
          )
        }
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <Header
            searchStr={searchStr}
            setSearchStr={str => {
              props.actions.fetchGroups();
              setSearchStr(str);
            }}
            user={user}
          />
        }
        ListFooterComponent={() => <View style={{marginBottom: scale(16)}} />}
      />
    </View>
  );
}

function Header({searchStr, setSearchStr, user}) {
  const [searchRequired, setSearchRequired] = useState(false);
  const {colors} = useTheme();
  let searchInput = useRef();
  return (
    <View style={styles(colors).headerContainer}>
      <View
        style={{
          opacity: searchRequired ? 1 : 0,
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}>
        <SearchInput
          pointerEvents={!searchRequired ? 'none' : 'auto'}
          ref={r => (searchInput = r)}
          isPrimary={true}
          style={{
            width: '100%',
            position: 'absolute',
          }}
          colors={colors}
          value={searchStr}
          onChangeText={text => setSearchStr(text)}
          onClose={() => {
            setSearchStr('');
            setSearchRequired(false);
          }}
        />
      </View>
      <View
        pointerEvents={searchRequired ? 'none' : 'auto'}
        style={[styles(colors).titleContainer, searchRequired && {opacity: 0}]}>
        <Text style={styles(colors).title}>Home</Text>
        <TouchableOpacity
          onPress={() => {
            setSearchRequired(true);
            searchInput.onFocus();
          }}>
          <CBSvg
            icon={SearchSVG}
            width={scale(24)}
            height={scale(24)}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles(colors).profileContainer}
        onPress={() => NavigationService.navigate('MyProfile')}>
        <CBAvatar size={scale(56)} uri={user.image} />
        <Text style={styles(colors).profileTitle}>
          {UserService.getUserName(user)}
        </Text>
      </TouchableOpacity>
      <Text style={styles(colors).listTitle}>Conversations</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
  groupList: state.User.groupList,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchGroups: () => {
      dispatch(userActions.fetchGroups());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeChats);
