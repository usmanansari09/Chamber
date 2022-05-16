import {router} from '../URLProvider';
import ResponseCallback from '../ResponseCallback';
import {injectAuthHeader} from '../APIManager';

const generateBody = request => {
  const body = new FormData();

  const requests = Object.keys(request);
  requests.forEach(r => {
    body.append(r, request[r]);
  });

  return body;
};

async function fetchUsers(api) {
  await injectAuthHeader(api);
  const apiCall = api.get(router.users);
  return ResponseCallback.onResponse(apiCall);
}

async function getProfile(api) {
  await injectAuthHeader(api);
  const apiCall = api.get(router.profile);

  return ResponseCallback.onResponse(apiCall);
}

async function getTerms(api) {
  await injectAuthHeader(api);
  const apiCall = api.get('/privacy-policy/');

  return ResponseCallback.onResponse(apiCall);
}

async function updateProfile(api, request) {
  await injectAuthHeader(api);
  const body = new FormData();

  const requests = Object.keys(request);
  requests.forEach(r => {
    body.append(r, request[r]);
  });

  const apiCall = api.patch(router.profile, body);
  return ResponseCallback.onResponse(apiCall);
}

async function createGroup(api, request) {
  await injectAuthHeader(api);

  const apiCall = api.post(router.groups, request);
  return ResponseCallback.onResponse(apiCall);
}

async function InviteUser(api, request) {
  await injectAuthHeader(api);

  const apiCall = api.patch(router.inviteUsers, request);
  return ResponseCallback.onResponse(apiCall);
}
async function createChat(api, request) {
  await injectAuthHeader(api);

  const apiCall = api.post(router.groups, request);
  return ResponseCallback.onResponse(apiCall);
}

async function addMultipleMembers(api, request) {
  await injectAuthHeader(api);

  const apiCall = api.patch(`${router.groups}users/multi/`, request);
  return ResponseCallback.onResponse(apiCall);
}

async function updateMember(api, request) {
  await injectAuthHeader(api);

  // const apiCall = api.patch(`${router.groups}users/${userId}/${groupId}/`);
  const apiCall = api.patch(`${router.groups}users/`, generateBody(request));
  return ResponseCallback.onResponse(apiCall);
}

async function fetchGroups(api) {
  await injectAuthHeader(api);

  const apiCall = api.get(router.groups);
  return ResponseCallback.onResponse(apiCall);
}

async function fetchChatList(api) {
  await injectAuthHeader(api);

  const apiCall = api.get(`${router.groups}single/`);
  return ResponseCallback.onResponse(apiCall);
}

async function fetchGroup(api, id) {
  await injectAuthHeader(api);

  const apiCall = api.get(`${router.groups}${id}/`);
  return ResponseCallback.onResponse(apiCall);
}

async function updateGroup(api, groupId, request) {
  await injectAuthHeader(api);

  const apiCall = api.patch(
    `${router.groups}${groupId}/`,
    generateBody(request),
  );
  return ResponseCallback.onResponse(apiCall);
}

async function sendMessage(api, groupId, request) {
  await injectAuthHeader(api);

  const apiCall = api.post(
    `${router.groups}chat/${groupId}/`,
    generateBody(request),
  );
  return ResponseCallback.onResponse(apiCall);
}

async function fetchMessages(api, groupId) {
  await injectAuthHeader(api);

  const apiCall = api.get(`${router.groups}chat/${groupId}/`);
  return ResponseCallback.onResponse(apiCall);
}

export default {
  fetchUsers,
  getProfile,
  updateProfile,
  createGroup,
  InviteUser,
  createChat,
  fetchGroups,
  fetchGroup,
  addMultipleMembers,
  updateMember,
  updateGroup,
  fetchChatList,
  sendMessage,
  fetchMessages,
  getTerms,
};
