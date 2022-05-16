import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../Constants/Constants';

/**
 * Store userToken
 *
 * @param {object} userToken
 */
const storeUserToken = async userToken => {
  try {
    await AsyncStorage.setItem(Constants.AS_USER_TOKEN, userToken);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetch userToken from LocalStorage
 *
 * @returns {object}
 */
async function getUserToken() {
  const token = await AsyncStorage.getItem(Constants.AS_USER_TOKEN);
  return token ?? '';
}

const storeUserTheme = async theme => {
  try {
    await AsyncStorage.setItem(Constants.AS_USER_THEME, theme);
  } catch (error) {
    console.log(error);
  }
};

async function getUserTheme() {
  const theme = await AsyncStorage.getItem(Constants.AS_USER_THEME);
  return theme ?? 'dark';
}

const storeUserCredentials = async credentials => {
  try {
    await AsyncStorage.setItem(Constants.AS_USER_PHONE, credentials?.phone);
    await AsyncStorage.setItem(
      Constants.AS_USER_PASSSWORD,
      credentials?.password,
    );
  } catch (error) {
    console.log(error);
  }
};

async function getUserCredentials() {
  const phone = await AsyncStorage.getItem(Constants.AS_USER_PHONE);
  const password = await AsyncStorage.getItem(Constants.AS_USER_PASSSWORD);
  if (phone && password) {
    return {phone: phone, password: password};
  } else {
    return {phone: '', password: ''};
  }
}

async function clearUserCredentials() {
  try {
    await AsyncStorage.setItem(Constants.AS_USER_PHONE, '');
    await AsyncStorage.setItem(Constants.AS_USER_PASSSWORD, '');
  } catch (error) {
    console.log(error);
  }
}

export default {
  storeUserToken,
  getUserToken,
  storeUserTheme,
  getUserTheme,
  storeUserCredentials,
  getUserCredentials,
  clearUserCredentials,
};
