import * as actions from './constants';

export const getProfile = () => ({
  type: actions.USER_PROFILE_REQUEST,
});

export const fetchGroups = () => ({
  type: actions.USER_FETCH_GROUPS_REQUEST,
});

export const updateTheme = darkMode => ({
  type: actions.USER_THEME_UPDATE,
  darkMode,
});

export const logout = () => ({
  type: actions.USER_LOG_OUT,
});
