import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import CBAppBar from '../../../Components/CBAppBar';
import ProfileItemBtn from '../../MyProfile/ProfileItemBtn';
import {scale} from '../../../Utils/scale';
import CreateChatSVG from '../../../assets/svgs/CreateChatSVG';
import * as NavigationService from '../../../Navigators/NavigationService';
import {useTheme} from '../../../Providers/ThemeProvider';
import {styles} from './styles';
import {ChamberMembersIcon} from '../../../Components/ChamberMembersIcon';
import {useDispatch, useSelector} from 'react-redux';
import * as userActions from '../../../Sagas/UserSaga/actions';

const temp = [
  {
    id: 1,
    name: 'business',
    created_by: {
      id: 1,
      fullname: 'Joshua',
    },
    users: [
      {
        id: 1,
        first_name: 'jhon',
        last_name: 'wick',
        image:
          'https://media.istockphoto.com/photos/fitness-sport-training-gym-success-and-lifestyle-concept-group-of-picture-id1282884610',
      },
      {
        id: 2,
        first_name: 'alex',
        last_name: 'hales',
        image:
          'https://media.istockphoto.com/photos/personal-trainer-helping-young-woman-on-her-work-at-gym-picture-id535449382',
      },
      {
        id: 3,
        first_name: 'simon',
        last_name: 'alexandor',
        image:
          'https://media.istockphoto.com/photos/young-sporty-woman-doing-dumbbell-exercise-at-the-gym-picture-id1010511384',
      },
    ],
  },
  {
    id: 2,
    name: 'Annual meeting',
    created_by: {
      id: 2,
      fullname: 'Joshua',
    },
    users: [
      {
        id: 1,
        first_name: 'jhon',
        last_name: 'wick',
        image:
          'https://media.istockphoto.com/photos/fitness-sport-training-gym-success-and-lifestyle-concept-group-of-picture-id1282884610',
      },
      {
        id: 2,
        first_name: 'alex',
        last_name: 'hales',
        image:
          'https://media.istockphoto.com/photos/personal-trainer-helping-young-woman-on-her-work-at-gym-picture-id535449382',
      },
    ],
  },
];

const HomeChamber = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {groupList, user} = useSelector(state => state.User);

  const totalList = [
    ...groupList.filter(
      g => g.created_by.id === user.id || g.users.some(u => u.id === user.id),
    ),
  ];

  useEffect(() => {
    dispatch(userActions.fetchGroups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          NavigationService.navigate('ChamberDetails', {
            chamber: item,
          })
        }
        key={index}
        activeOpacity={0.5}
        style={styles(colors).chamberItemContainer}>
        <ChamberMembersIcon members={item?.users} />
        <View style={styles(colors).chamberInfoContainer}>
          <Text style={styles(colors).listTitle}>{item.name}</Text>
          <Text style={styles(colors).chamberCreatedBy}>
            Created By {item.created_by.fullname}
          </Text>
          <Text style={styles(colors).chamberCreatedBy}>
            {item?.users?.length} Members
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const AllChambers = () => {
    return (
      <View style={styles(colors).allChamberContainer}>
        <Text style={styles(colors).listTitle}>All Chambers</Text>
        <FlatList
          contentContainerStyle={styles(colors).flatList}
          data={totalList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Create'} backHidden={true} onPress={() => {}} />
      <ProfileItemBtn
        style={{marginTop: scale(20)}}
        icon={CreateChatSVG}
        label={'Create Chamber'}
        onPress={() => NavigationService.navigate('NewChamber')}
      />
      <AllChambers />
    </View>
  );
};

export default HomeChamber;
