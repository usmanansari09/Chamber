import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Containers/Home';
import MyProfileScreen from '../Containers/MyProfile';
import ChatScreen from '../Containers/Chat';
import NewGroupScreen from '../Containers/NewGroup';
import AddPeoplesScreen from '../Containers/NewGroup/AddPeoples';
import UserDetailsScreen from '../Containers/UserDetails';
import GroupDetailsScreen from '../Containers/GroupDetails';
import SettingsScreen from '../Containers/Settings';
import OtherUserScreen from '../Containers/OtherUser';
import DocumentPreview from '../Containers/DocumentPreview';
import AboutPage from '../Containers/AboutPage';
import NewChamberScreen from '../Containers/NewChamber';
import InviteUserScreen from '../Containers/InviteUser';
import ChamberDetailsScreen from '../Containers/ChamberDetails';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    NewGroup: {
      screen: NewGroupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddPeoples: {
      screen: AddPeoplesScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    MyProfile: {
      screen: MyProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    OtherUser: {
      screen: OtherUserScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    UserDetails: {
      screen: UserDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DocumentPreview: {
      screen: DocumentPreview,
      navigationOptions: {
        headerShown: false,
      },
    },
    AboutPage: {
      screen: AboutPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    GroupDetails: {
      screen: GroupDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    NewChamber: {
      screen: NewChamberScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    InviteUser: {
      screen: InviteUserScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChamberDetails: {
      screen: ChamberDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
