import ResponseCallback from '../ResponseCallback';
import {router} from '../URLProvider';
import {removeAuthHeader} from '../APIManager';

async function login(api, phone, password) {
  const body = new FormData();
  body.append('phone', phone);
  body.append('password', password);
  await removeAuthHeader(api);
  const apiCall = api.post(router.login, body);
  return ResponseCallback.onResponse(apiCall);
}

async function register(api, request) {
  const {phone, password, firstName, lastName, email, company} = request;
  const body = new FormData();
  body.append('phone', phone);
  body.append('password', password);
  body.append('first_name', firstName);
  body.append('last_name', lastName);
  body.append('email', email);
  body.append('company', company);
  await removeAuthHeader(api);
  const apiCall = api.post(router.register, body);
  return ResponseCallback.onResponse(apiCall);
}

async function sendOTP(api, phoneNumber) {
  await removeAuthHeader(api);
  const apiCall = api.get(`${router.otp}${phoneNumber}/`);
  return ResponseCallback.onResponse(apiCall);
}

async function verifyOTP(api, token, isSignUp) {
  await removeAuthHeader(api);
  const apiCall = api.post(
    `${isSignUp ? router.users : router.resetOTP}${token}/`,
  );
  return ResponseCallback.onResponse(apiCall);
}

async function resetPassword(api, token, password) {
  const body = new FormData();
  body.append('new_password', password);
  await removeAuthHeader(api);
  const apiCall = api.patch(`${router.resetPassword}/${token}/`, body);
  return ResponseCallback.onResponse(apiCall);
}

export default {
  login,
  register,
  sendOTP,
  verifyOTP,
  resetPassword,
};
