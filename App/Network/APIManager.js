import {base_url} from './URLProvider';
import apisauce from 'apisauce';
import AuthAPI from './APIs/AuthAPI';
import UsersAPI from './APIs/UsersAPI';
import HelperService from '../Utils/HelperService';

export default {
  login,
  register,
  sendOTP,
  verifyOTP,
  resetPassword,

  fetchUsers,
  getProfile,
  getTerms,
  updateProfile,

  InviteUser,
  createGroup,
  createChat,
  addMultipleMembers,
  updateMember,
  fetchGroups,
  fetchGroup,
  updateGroup,

  fetchChatList,
  sendMessage,
  fetchMessages,
};

const api = apisauce.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    // mimeType: 'multipart/form-data',
    'Cache-Control': 'no-cache',
  },
  timeout: 60000,
});

export async function removeAuthHeader(requiredApi) {
  delete requiredApi.headers.Authorization;
}

export async function injectAuthHeader(requiredApi) {
  const token = await HelperService.getUserToken();
  requiredApi.setHeader('Authorization', `Token ${token}`);
}

/**
 * Auth API
 */

async function login(phone, password) {
  return AuthAPI.login(api, phone, password);
}

async function register(body) {
  return AuthAPI.register(api, body);
}

async function sendOTP(phoneNumber) {
  return AuthAPI.sendOTP(api, phoneNumber);
}

async function verifyOTP(token, isSignUp = false) {
  return AuthAPI.verifyOTP(api, token, isSignUp);
}

async function resetPassword(token, password) {
  return AuthAPI.resetPassword(api, token, password);
}

async function fetchUsers() {
  return UsersAPI.fetchUsers(api);
}

async function getProfile() {
  return UsersAPI.getProfile(api);
}

async function getTerms() {
  return UsersAPI.getTerms(api);
}

async function updateProfile(request) {
  return UsersAPI.updateProfile(api, request);
}

async function createGroup(request) {
  return UsersAPI.createGroup(api, request);
}

async function InviteUser(request) {
  return UsersAPI.InviteUser(api, request);
}

async function createChat(request) {
  return UsersAPI.createChat(api, request);
}

async function addMultipleMembers(request) {
  return UsersAPI.addMultipleMembers(api, request);
}

async function updateMember(request) {
  return UsersAPI.updateMember(api, request);
}

async function fetchGroups() {
  return UsersAPI.fetchGroups(api);
}

async function fetchChatList() {
  return UsersAPI.fetchChatList(api);
}

async function fetchGroup(id) {
  return UsersAPI.fetchGroup(api, id);
}

async function updateGroup(groupId, request) {
  return UsersAPI.updateGroup(api, groupId, request);
}

async function sendMessage(id, request) {
  return UsersAPI.sendMessage(api, id, request);
}

async function fetchMessages(id) {
  return UsersAPI.fetchMessages(api, id);
}
