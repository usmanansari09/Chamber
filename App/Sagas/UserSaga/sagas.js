import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './constants';
import APIManager from '../../Network/APIManager';
import DialogUtil from '../../Utils/DialogUtil';
import * as NavigationService from '../../Navigators/NavigationService';

/**
 * Fetch Profile
 */
function* handleGetProfile() {
  try {
    yield put({
      type: actions.USER_PROFILE_SUCCESS,
      user: {},
    });
    const result = yield call(APIManager.getProfile);
    yield put({
      type: actions.USER_PROFILE_SUCCESS,
      user: result,
    });
  } catch (error) {
    console.log(error);
    if (error === 'Token has expired' || error === 'Invalid token') {
      NavigationService.navigate('LogIn');
      return;
    }
    yield put({
      type: actions.USER_PROFILE_ERROR,
      error,
    });
  }
}

function* handleFetchGroupList() {
  try {
    const groupList = yield call(APIManager.fetchGroups);

    // for (let i = 0; i < groupList.length; i++) {
    //   const item = groupList[i];
    //   const res = yield call(APIManager.fetchMessages, item.id);
    //   if (res.length !== 0) {
    //     groupList[i] = {...item, last_msg: res[0]};
    //   }
    // }

    yield put({
      type: actions.USER_FETCH_GROUPS_SUCCESS,
      groupList,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: actions.UPDATE_ANY_ERROR,
      error,
    });
  }
}

/**
 * Log out
 */
function* logout() {}

export default all([
  takeLatest(actions.USER_PROFILE_REQUEST, handleGetProfile),
  takeLatest(actions.USER_FETCH_GROUPS_REQUEST, handleFetchGroupList),
  takeLatest(actions.USER_LOG_OUT, logout),
]);
